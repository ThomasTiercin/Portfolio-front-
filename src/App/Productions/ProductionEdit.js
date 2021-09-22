import React, { useState } from 'react';
import { productionService } from '../../_services';
import firebase from '../../Firebase';

class ProductionEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            production: {id:'',title:'',date:'', description:'', image:'', link:''},
            error: {},
            image: null,
            progress:0,
            downloadURL: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    componentDidMount() {
        productionService.getProductionById(this.props.match.params.id).then(production => this.setState({ production }))        
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            ...this.production,
            production: { ...this.state.production, [name]: value },
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { id, production } = this.state;
        this.setState({ submitted: true });
        productionService.updateProduction(id, production)
        .then(
            a => {
                this.props.history.push("/admin/productions");
            },
            error => this.setState({ error })
        )
    }
    
    handleUpload(e){
        if(e.target.files[0]){
            this.setState({
                image: e.target.files[0]
            })
            let file = e.target.files[0];
            var storage = firebase.storage();
            var storageRef = storage.ref();
            var uploadTask = storageRef.child('productions/' + file.name).put(file);
        
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) =>{
                var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
                this.setState({progress})
            },(error) =>{
                throw error
            },() =>{
                uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
                this.setState({
                    downloadURL: url,
                    ...this.production,
                    production: { ...this.state.production, image: url }
                })
                })
            document.getElementById("file").value = null
            }
        ) 
        }
      }
    

    render() {
        let { production } = this.state;
        return (
            <section id="administration" className="portfolio">
                <div ><br/><br/><br/><br/>
                    <div className="section-heading text-center">
                        <h2>Productions</h2>
                    </div>      
                    <div className="container">    
                    <br/>      
                    <form  onSubmit={this.handleSubmit}  encType="multipart/form-data">
                        <div className="col-md-6">
                            <img
                                className="ref"
                                src={production.image || "https://via.placeholder.com/400x300"}
                                alt="Uploaded Images"
                                height="300"
                                width="400"
                                />
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor="name">Titre :</label>
                            <input type="text" className="form-control" name="title" defaultValue={production.title} onChange={this.handleChange} required="required"/>
                            <label htmlFor="date">Date :</label>
                            <input type="text" className="form-control" name="date" defaultValue={production.date} onChange={this.handleChange} required="required"/>
                            <label htmlFor="description">Description :</label>
                            <textarea type="text" className="form-control" name="description" defaultValue={production.description} onChange={this.handleChange} required="required"/>
                            
                            <label htmlFor="image">Image :</label>
                            <input type="file" accept='image/*' id="file" onChange={this.handleUpload} className="form-control"/>
                            <div className="progress" style={{width: '100%'}}>
                                <div className="progress-bar bg-success" role="progressbar" style={{width: this.state.progress+'%'}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <label htmlFor="link">Lien :</label>
                            <input type="text" className="form-control" name="link" defaultValue={production.link} onChange={this.handleChange} required="required"/>
                            <br/>
                            <button type="submit" className="btn btn-success">Modifier</button>
                            <span className="btn btn-warning" onClick={() => this.props.history.goBack()}>Retour</span>
                        </div>
                        
                        
                        
                    </form>
                    
                    
                    </div>
                </div>
            </section>
            
        );
    }
}
export {ProductionEdit}; 