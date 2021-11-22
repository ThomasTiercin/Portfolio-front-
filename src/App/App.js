import React from 'react';
import { Link } from "react-router-dom";
import { experienceService, professionalSkillService, educationService, personalSkillService, productionService } from '../_services';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
            i: 1,
            experiences: [],
			professionalSkills: [],
			personalSkills: [],
			educations: [],
			productions: []
        };
    }

	componentDidMount(e) {
        experienceService.getAll().then(experiences => this.setState({ experiences }));
        professionalSkillService.getAll().then(professionalSkills => this.setState({ professionalSkills }));
        personalSkillService.getAll().then(personalSkills => this.setState({ personalSkills }));
        educationService.getAll().then(educations => this.setState({ educations }));
        productionService.getAll().then(productions => this.setState({ productions }));
    }

    render(){
		const { experiences, professionalSkills, educations, personalSkills, productions } = this.state;
        let { i } = this.state;
		
		// Personal skills map
		const personalSkillsMap = personalSkills.map((personalSkills, index) => {
			return (
				<div className="col-md-6" key={index}>
					<div className="barWrapper">
						<span className="progressText">{personalSkills.name}</span>
						<div className="single-progress-txt">
							<div className="progress ">
								<div className="progress-bar" role="progressbar" style={{width: personalSkills.level+"%"}} aria-valuenow={personalSkills.level} aria-valuemin="10" aria-valuemax="100" />
							</div>
							<h3>{personalSkills.level}%</h3>	
						</div>
					</div>
				</div>
			)
		})
		// Professional skills map
		const professionalSkillsMap = professionalSkills.map((professionalSkill, index) => {
			return (
				<div className="col-md-6" key={index}>
					<div className="barWrapper">
						<span className="progressText">{professionalSkill.name}</span>
						<div className="single-progress-txt">
							<div className="progress ">
								<div className="progress-bar" role="progressbar" style={{width: professionalSkill.level+"%"}} aria-valuenow={professionalSkill.level} aria-valuemin="10" aria-valuemax="100" />
							</div>
							<h3>{professionalSkill.level}%</h3>	
						</div>
					</div>
				</div>
			)
		})
		// experiences map
		const experiencesMap = experiences.map((experience, index) => 
			<span key={index}>
				<div className="single-timeline-box fix" >
					<div className="row">
						<div className="col-md-5">
							<div className="experience-time text-right">
								<h2>{experience.date}</h2>
								<h3>{experience.title}</h3>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-5">
							<div className="timeline">
								<div className="timeline-content">
									<h4 className="title">
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
										{experience.subtitle}
									</h4>
									<h5>{experience.city}</h5>
									<li style={{whiteSpace: 'pre-line'}}>{experience.detail}</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</span>
		)
		// education map
		const educationsMap = educations.map((education, index) => 
			<div className="col-sm-3" key={index}>
				<div className="single-horizontal-timeline">
					<div className="experience-time">
						<h2>{education.date}</h2>
						<h3>{education.title}</h3>
					</div>
					<div className="timeline-horizontal-border">
						<i className="fa fa-circle" aria-hidden="true"></i>
						<span className="single-timeline-horizontal"></span>
					</div>
					<div className="timeline">
						<div className="timeline-content">
							<h4 className="title">{education.school}</h4>
							<h5>{education.city}</h5>
						</div>
					</div>
				</div>
			</div>
		)
		const productionsMap = productions.map((production, index) => 
            (
                <div className="col-sm-4" key={index}>
                    <div className="item">
                        <h2 style={{textAlign: 'center'}}>{production.title}</h2>
                        <img src={production.image} 
                                style={{width: '360px',height: '214px',objectFit: 'cover',objectPosition: 'top'}} alt="production image"/>
                        <div className="isotope-overlay">
                            <Link to={'/production/'+production.id}>
                                {production.title}
                            </Link>
                        </div>
                    </div>
                </div>
            )
        )
		return (
		<>			
			<section id="welcome-hero" className="welcome-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<div className="header-text">
								<h2>Bonjour <span>,</span> je m'appelle <br/> Thomas <br/> Tiercin <span>.</span>   </h2>
								<p>Developpeur informatique</p>
								<a href="assets/CV_Thomas_TIERCIN.pdf" download>Télécharger mon CV</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="about">
				<div className="section-heading text-center">
					<h2>A propos</h2>
				</div>
				<div className="container">
					<div className="about-content">
						<div className="row">
							<div className="col-sm-6">
								<div className="single-about-txt">
									<h3>Je suis un jeune développeur âgé de 24 ans. Cela fait 4 ans que je suis consultant ERP chez Capgemini.</h3>
									<p> Il est important pour moi d'évoluer et d'étoffer mes connaissances. Je souhaite changer de langage informatique en me dirigeant vers du développement .NET. Je suis passioné par les voyages, la musique et les jeux-vidéos.
									</p>
									<div className="row">
										<div className="col-sm-6">
											<div className="single-about-add-info">
												<h3>email</h3>
												<p>thomastiercin@gmail.com</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-offset-1 col-sm-5">
								<div className="single-about-img">
									<img src="assets/images/about/profile_image.jpeg" style={{objectFit: 'cover', objectPosition: 'top'}} alt="profile_image"/>
									<div className="about-list-icon">
										<ul>
											<li>
												<a href="https://github.com/ThomasTiercin">
													<i  className="fa fa-github" aria-hidden="true"></i>
												</a>
											</li>
											<li>
												<a href="https://www.linkedin.com/in/thomas-tiercin/">
													<i  className="fa fa-linkedin" aria-hidden="true"></i>
												</a>
											</li>
											<li>
												<a href="https://www.instagram.com/thomastiercin">
													<i  className="fa fa-instagram" aria-hidden="true"></i>
												</a>
											</li>										
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="education" className="education">
				<div className="section-heading text-center">
					<h2>Etudes</h2>
				</div>
				<div className="container">
					<div className="education-horizontal-timeline">
						<div className="row">
							{educationsMap}
						</div>
					</div>
				</div>
			</section>

			<section id="skills" className="skills">
				<div className="skill-content">
					<div className="section-heading text-center">
						<h2>Compétences</h2>
					</div>
					<div className="container">
						<br/><br/>
						{professionalSkillsMap}
						{personalSkillsMap}
					</div>			
				</div>
			</section>

			<section id="experience" className="experience">
				<div className="section-heading text-center">
					<h2>experiences</h2>
				</div>
				<div className="container">
					<div className="experience-content">
						<div className="main-timeline">
							<ul>
								{experiencesMap}
							</ul>
						</div>
					</div>
				</div>

			</section>
			<section id="voyages" className="profiles">
				<div className="profiles-details">
					<div className="section-heading text-center">
						<h2>Mes voyages</h2>
					</div>
					<div className="container">
						<div className="profiles-content">
							<div className="row">
								<div className="col-sm-3">
									<div className="single-profile">
										<div className="profile-txt">
											<a href=""><i className="flaticon-dubai"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTAgNTEwIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0ibGcxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmM2VhZTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjZGJmYmEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTE5LjQ5MSIgeDI9IjIxNi45MzYiIHhsaW5rOmhyZWY9IiNsZzEiIHkxPSIxMjQiIHkyPSIxMjQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxnMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFkMGZiIi8+PHN0b3Agb2Zmc2V0PSIuNjA3NSIgc3RvcC1jb2xvcj0iIzI2YTZmZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxODJmYyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5Mi42NDQiIHgyPSIzOTguOTk2IiB4bGluazpocmVmPSIjbGcyIiB5MT0iMjUyLjYyNiIgeTI9IjI1Mi42MjYiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxnMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFiZmZhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWI1Y2ZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk3LjExNSIgeDI9IjMxNC4xNyIgeGxpbms6aHJlZj0iI2xnMyIgeTE9IjI1NC41MDMiIHkyPSIyNTQuNTAzIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTcuNjU4IiB4Mj0iMzc3LjM5NiIgeGxpbms6aHJlZj0iI2xnMyIgeTE9IjI1NC40NzQiIHkyPSIyNTQuNDc0Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsZzQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZhZjdmNyIvPjxzdG9wIG9mZnNldD0iLjQ1NTEiIHN0b3AtY29sb3I9IiNmM2VhZTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlZmUyZGQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTA0LjE5NCIgeDI9IjM1OS42NSIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjM3NSIgeTI9IjM3NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTA0LjE5NCIgeDI9IjM1OS42NSIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjI3Mi4xNTYiIHkyPSIyNzIuMTU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF83XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNDIuNTgxIiB4Mj0iMzQ5Ljk3NyIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjE2OS4zMTIiIHkyPSIxNjkuMzEyIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF84XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5MC43MDciIHgyPSIzOTUuODQ2IiB4bGluazpocmVmPSIjbGc0IiB5MT0iMjUxLjc1IiB5Mj0iMjUxLjc1Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMjYuMTU4IiB4Mj0iMzIwLjIwNSIgeGxpbms6aHJlZj0iI2xnMSIgeTE9IjYzLjA4NCIgeTI9IjYzLjA4NCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMTBfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI5OC4xNTgiIHgyPSIzOTUuNjAzIiB4bGluazpocmVmPSIjbGc0IiB5MT0iMTI0IiB5Mj0iMTI0Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzE3LjE3NiIgeDI9IjQzMy42MDYiIHhsaW5rOmhyZWY9IiNsZzEiIHkxPSIxMjQiIHkyPSIxMjQiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEyXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIDEgLTEgMCAyMzYzLjUwNCAzMDc4LjQ5NSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTMxMTcuOTQ1IiB4Mj0iLTI0ODAuNTkzIiB4bGluazpocmVmPSIjbGc0IiB5MT0iMjA2MS42NCIgeTI9IjIwNjEuNjQiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEzXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMzguMTU4IiB4Mj0iMzgwLjMzOCIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjQ0OS42MSIgeTI9IjQ0OS42MSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMTRfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2OS40OTEiIHgyPSIzODUuOTIxIiB4bGluazpocmVmPSIjbGcxIiB5MT0iNDQ5LjYxIiB5Mj0iNDQ5LjYxIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xNV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTIuOTUxIiB4Mj0iNzk0LjQ2IiB4bGluazpocmVmPSIjbGcyIiB5MT0iNDc0LjU2IiB5Mj0iNDc0LjU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xNl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTQ4IiB4Mj0iNTI3LjAzMyIgeGxpbms6aHJlZj0iI2xnMiIgeTE9IjQ3NC41NiIgeTI9IjQ3NC41NiIvPjxnPjxnPjxnPjxwYXRoIGQ9Im0yNDMuOTA2IDEyNGMwLTExLjA1MS04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMWgtOTIuNzJjLTExLjA1MSAwLTIwLjAxIDguOTU5LTIwLjAxIDIwLjAxIDAgMTEuMDUxIDguOTU5IDIwLjAxIDIwLjAxIDIwLjAxaDkyLjcyYzExLjA1MSAwIDIwLjAxLTguOTU5IDIwLjAxLTIwLjAxeiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48L2c+PHBhdGggZD0ibTM1Ni4yMDIgNDY5LjYyaC0yNDEuMzY2bC04LjI3My0xNDYuOTk5Yy03LjEyMy0xMjYuNTc2IDcwLjc4Ny0yNDIuNDUgMTkwLjY5My0yODMuNjE2bDMuMDY1LTEuMDUyYzI3LjM4My05LjQwMSA1NC4wNyAxMC45NDYgNTQuMDcgMzkuODk3eiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48cGF0aCBkPSJtMjY0LjExNCA1Mi43ODF2MTI5LjI2OWgtMTI5LjA2NmMtNCA4LjE0LTcuNjEgMTYuNDktMTAuODIgMjUuMDFoMTE3LjAxMWMxMi42MzQgMCAyMi44NzYgMTAuMjQyIDIyLjg3NiAyMi44NzZ2NTQuOTY0aC0xNTcuMTU3Yy0uNjUgOC4yNi0uOTIgMTYuNjEtLjgyIDI1LjAxaDEzNS4xMDFjMTIuNjM0IDAgMjIuODc2IDEwLjI0MiAyMi44NzYgMjIuODc2djU0Ljk1NGgtMTUzLjg4N2wxLjQxIDI1LjAxaDEyOS42MDFjMTIuNjM0IDAgMjIuODc2IDEwLjI0MiAyMi44NzYgMjIuODc2djMzLjk5NGgzMi4wNzF2LTQzMC4yMzVjLTExLjA2MiAzLjg0Ny0yMS43NjUgOC4zMjctMzIuMDcyIDEzLjM5NnoiIGZpbGw9InVybCgjU1ZHSURfM18pIi8+PHBhdGggZD0ibTMzMS4xOTEgMzkuMzI4djEwNC43NGgtMjMuOTE3Yy00IDguMTQtNy42MSAxNi40OS0xMC44MiAyNS4wMWgxOS42MTRjOC4zNTIgMCAxNS4xMjMgNi43NzEgMTUuMTIzIDE1LjEyM3YyODUuNDE5aDI1LjAxMXYtMzkxLjc3Yy0uOTQ4LTE5Ljc3OC0xMC41NjktMzIuMDQ2LTI1LjAxMS0zOC41MjJ6IiBmaWxsPSJ1cmwoI1NWR0lEXzRfKSIvPjxwYXRoIGQ9Im0zMDguMjM0IDM3NC45OTljMC03LjAzNS01LjcwNC0xMi43MzktMTIuNzM5LTEyLjczOWgtMTYyLjc1Yy03LjAzNiAwLTEyLjczOSA1LjcwNC0xMi43MzkgMTIuNzM5czUuNzA0IDEyLjczOSAxMi43MzkgMTIuNzM5aDE2Mi43NWM3LjAzNi4wMDEgMTIuNzM5LTUuNzAzIDEyLjczOS0xMi43Mzl6IiBmaWxsPSJ1cmwoI1NWR0lEXzVfKSIvPjxwYXRoIGQ9Im0zMDguMjM0IDI3Mi4xNTZjMC03LjAzNS01LjcwNC0xMi43MzktMTIuNzM5LTEyLjczOWgtMTYyLjc1Yy03LjAzNiAwLTEyLjczOSA1LjcwNC0xMi43MzkgMTIuNzM5czUuNzA0IDEyLjczOSAxMi43MzkgMTIuNzM5aDE2Mi43NWM3LjAzNiAwIDEyLjczOS01LjcwNCAxMi43MzktMTIuNzM5eiIgZmlsbD0idXJsKCNTVkdJRF82XykiLz48cGF0aCBkPSJtMzA4LjIzNCAxNjkuMzEyYzAtNy4wMzUtNS43MDQtMTIuNzM5LTEyLjczOS0xMi43MzloLTEyNy4zMzdjLTcuMDM2IDAtMTIuNzM5IDUuNzA0LTEyLjczOSAxMi43MzlzNS43MDQgMTIuNzM5IDEyLjczOSAxMi43MzloMTI3LjMzN2M3LjAzNiAwIDEyLjczOS01LjcwNCAxMi43MzktMTIuNzM5eiIgZmlsbD0idXJsKCNTVkdJRF83XykiLz48cGF0aCBkPSJtMTI5LjgyMSAzNDUuODc4Yy03LjEyMy0xMjYuNTc2IDcwLjc4Ni0yNDIuNDUxIDE5MC42OTMtMjgzLjYxNmwzLjA2NS0xLjA1MmMxMC4yMTEtMy41MDUgMjAuNjU4LTIuNTcyIDI5LjY0MyAxLjA5OS01LjkxMS0xOS43OTItMzAuODc1LTMzLjkxOC01Mi45LTI2LjM1NmwtMy4wNjUgMS4wNTJjLTExOS45MDcgNDEuMTY2LTE5OS44MTcgMTU5LjA0LTE5Mi42OTQgMjg1LjYxNmw4LjI3MyAxNDYuOTk5aDIzLjk0OHoiIGZpbGw9InVybCgjU1ZHSURfOF8pIi8+PHBhdGggZD0ibTI2NC4xMTQgODguODc4YzEwLjMxNi02LjM0MyAyMS4xMS0xMi4wNjEgMzIuMzQtMTcuMDk5di0zNC40ODljLTExLjE0IDMuODYyLTIxLjkzMyA4LjM4NS0zMi4zNCAxMy41MTd6IiBmaWxsPSJ1cmwoI1NWR0lEXzlfKSIvPjxnPjxwYXRoIGQ9Im00MjIuNTczIDEyNGMwLTExLjA1MS04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMWgtOTIuNzJjLTExLjA1MSAwLTIwLjAxIDguOTU5LTIwLjAxIDIwLjAxIDAgMTEuMDUxIDguOTU5IDIwLjAxIDIwLjAxIDIwLjAxaDkyLjcyYzExLjA1MSAwIDIwLjAxLTguOTU5IDIwLjAxLTIwLjAxeiIgZmlsbD0idXJsKCNTVkdJRF8xMF8pIi8+PHBhdGggZD0ibTQwMi41NjMgMTAzLjk5aC00MC4wMmMxMS4wNTEgMCAyMC4wMSA4Ljk1OSAyMC4wMSAyMC4wMXMtOC45NTkgMjAuMDEtMjAuMDEgMjAuMDFoNDAuMDJjMTEuMDUxIDAgMjAuMDEtOC45NTkgMjAuMDEtMjAuMDFzLTguOTU5LTIwLjAxLTIwLjAxLTIwLjAxeiIgZmlsbD0idXJsKCNTVkdJRF8xMV8pIi8+PC9nPjxwYXRoIGQ9Im0yODkuMTI1IDQ2OS42MmgyNS40Nzh2LTQ1Ni40NTljMC03LjAxNC01LjQ4Ny0xMy4wMzEtMTIuNS0xMy4xNTktNy4xNDUtLjEzMS0xMi45NzggNS42MjItMTIuOTc4IDEyLjczN3oiIGZpbGw9InVybCgjU1ZHSURfMTJfKSIvPjxnPjxwYXRoIGQ9Im0zNzQuODg4IDQ0OS42MWMwLTExLjA1MS04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMWgtMjQ3LjQ0Yy0xMS4wNTEgMC0yMC4wMSA4Ljk1OS0yMC4wMSAyMC4wMSAwIDExLjA1MSA4Ljk1OSAyMC4wMSAyMC4wMSAyMC4wMWgyNDcuNDRjMTEuMDUxIDAgMjAuMDEtOC45NTkgMjAuMDEtMjAuMDF6IiBmaWxsPSJ1cmwoI1NWR0lEXzEzXykiLz48cGF0aCBkPSJtMzU0Ljg3OCA0MjkuNmgtNDAuMDJjMTEuMDUxIDAgMjAuMDEgOC45NTkgMjAuMDEgMjAuMDFzLTguOTU5IDIwLjAxLTIwLjAxIDIwLjAxaDQwLjAyYzExLjA1MSAwIDIwLjAxLTguOTU5IDIwLjAxLTIwLjAxcy04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMXoiIGZpbGw9InVybCgjU1ZHSURfMTRfKSIvPjwvZz48L2c+PGc+PHBhdGggZD0ibTUxMCA0ODIuODkxdjE0Ljg2N2MwIDYuNzYxLTUuNDgxIDEyLjI0Mi0xMi4yNDIgMTIuMjQyaC00ODUuNTE2Yy02Ljc2MSAwLTEyLjI0Mi01LjQ4MS0xMi4yNDItMTIuMjQydi0xNC44NzFjMC0xMC43ODMgOC43NjktMTkuNTg2IDE5LjU1MS0xOS40NTIgMTAuODAzLjEzNCAyMS42NDctMy45MTkgMjkuODg5LTEyLjE1NCA4LjEtOC4xMSAxOC43My0xMi4xNiAyOS4zNi0xMi4xNnMyMS4yNiA0LjA1IDI5LjM3IDEyLjE2YzguMTEgOC4xIDE4Ljc0IDEyLjE2IDI5LjM3IDEyLjE2IDEwLjYyIDAgMjEuMjUtNC4wNiAyOS4zNi0xMi4xNiA4LjExLTguMTEgMTguNzQtMTIuMTYgMjkuMzctMTIuMTZzMjEuMjUgNC4wNSAyOS4zNiAxMi4xNmM4LjExIDguMSAxOC43NCAxMi4xNiAyOS4zNyAxMi4xNnMyMS4yNi00LjA2IDI5LjM3LTEyLjE2YzguMTEtOC4xMSAxOC43My0xMi4xNiAyOS4zNi0xMi4xNnMyMS4yNiA0LjA1IDI5LjM3IDEyLjE2YzguMTEgOC4xIDE4Ljc0IDEyLjE2IDI5LjM2IDEyLjE2IDEwLjYzIDAgMjEuMjYtNC4wNiAyOS4zNy0xMi4xNiA4LjExLTguMTEgMTguNzQtMTIuMTYgMjkuMzctMTIuMTZzMjEuMjYgNC4wNSAyOS4zNiAxMi4xNmM4LjExIDguMSAxOC43NCAxMi4xNiAyOS4zNyAxMi4xNi4wNjkgMCAuMTM4IDAgLjIwOC0uMDAxIDEwLjkwNC0uMDU1IDE5Ljg2MiA4LjU0NiAxOS44NjIgMTkuNDUxeiIgZmlsbD0idXJsKCNTVkdJRF8xNV8pIi8+PHBhdGggZD0ibTQ5MC4xMzcgNDYzLjQzOWMtLjA2OSAwLS4xMzggMC0uMjA4IDAtMTAuNjMgMC0yMS4yNi00LjA2LTI5LjM3LTEyLjE2LTguMS04LjExLTE4LjczLTEyLjE2LTI5LjM2LTEyLjE2LTYuOTAyIDAtMTMuNzk5IDEuNzE5LTIwLjAxMSA1LjEzNiAzLjM1NCAxLjg0NiA2LjUxMSA0LjE4IDkuMzUxIDcuMDI0IDguMTEgOC4xIDE4Ljc0IDEyLjE2IDI5LjM3IDEyLjE2aC4yMDhjMTAuOTA1LS4wNTQgMTkuODYzIDguNTQ3IDE5Ljg2MyAxOS40NTF2MTQuODY3YzAgNi43NjEtNS40ODEgMTIuMjQyLTEyLjI0MiAxMi4yNDJoNDAuMDJjNi43NjEgMCAxMi4yNDItNS40ODEgMTIuMjQyLTEyLjI0MnYtMTQuODY3YzAtMTAuOTA0LTguOTU4LTE5LjUwNS0xOS44NjMtMTkuNDUxeiIgZmlsbD0idXJsKCNTVkdJRF8xNl8pIi8+PC9nPjwvZz48L3N2Zz4=" /></i></a>
											<div className="profile-icon-name">Dubai</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href=""><i className="flaticon-dubai"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTAgNTEwIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0ibGcxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmM2VhZTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjZGJmYmEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTE5LjQ5MSIgeDI9IjIxNi45MzYiIHhsaW5rOmhyZWY9IiNsZzEiIHkxPSIxMjQiIHkyPSIxMjQiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxnMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFkMGZiIi8+PHN0b3Agb2Zmc2V0PSIuNjA3NSIgc3RvcC1jb2xvcj0iIzI2YTZmZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxODJmYyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5Mi42NDQiIHgyPSIzOTguOTk2IiB4bGluazpocmVmPSIjbGcyIiB5MT0iMjUyLjYyNiIgeTI9IjI1Mi42MjYiLz48bGluZWFyR3JhZGllbnQgaWQ9ImxnMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDFiZmZhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWI1Y2ZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ijk3LjExNSIgeDI9IjMxNC4xNyIgeGxpbms6aHJlZj0iI2xnMyIgeTE9IjI1NC41MDMiIHkyPSIyNTQuNTAzIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMTcuNjU4IiB4Mj0iMzc3LjM5NiIgeGxpbms6aHJlZj0iI2xnMyIgeTE9IjI1NC40NzQiIHkyPSIyNTQuNDc0Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsZzQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZhZjdmNyIvPjxzdG9wIG9mZnNldD0iLjQ1NTEiIHN0b3AtY29sb3I9IiNmM2VhZTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlZmUyZGQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTA0LjE5NCIgeDI9IjM1OS42NSIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjM3NSIgeTI9IjM3NSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTA0LjE5NCIgeDI9IjM1OS42NSIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjI3Mi4xNTYiIHkyPSIyNzIuMTU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF83XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNDIuNTgxIiB4Mj0iMzQ5Ljk3NyIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjE2OS4zMTIiIHkyPSIxNjkuMzEyIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF84XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI5MC43MDciIHgyPSIzOTUuODQ2IiB4bGluazpocmVmPSIjbGc0IiB5MT0iMjUxLjc1IiB5Mj0iMjUxLjc1Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMjYuMTU4IiB4Mj0iMzIwLjIwNSIgeGxpbms6aHJlZj0iI2xnMSIgeTE9IjYzLjA4NCIgeTI9IjYzLjA4NCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMTBfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI5OC4xNTgiIHgyPSIzOTUuNjAzIiB4bGluazpocmVmPSIjbGc0IiB5MT0iMTI0IiB5Mj0iMTI0Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzE3LjE3NiIgeDI9IjQzMy42MDYiIHhsaW5rOmhyZWY9IiNsZzEiIHkxPSIxMjQiIHkyPSIxMjQiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEyXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIDEgLTEgMCAyMzYzLjUwNCAzMDc4LjQ5NSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTMxMTcuOTQ1IiB4Mj0iLTI0ODAuNTkzIiB4bGluazpocmVmPSIjbGc0IiB5MT0iMjA2MS42NCIgeTI9IjIwNjEuNjQiLz48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEzXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMzguMTU4IiB4Mj0iMzgwLjMzOCIgeGxpbms6aHJlZj0iI2xnNCIgeTE9IjQ0OS42MSIgeTI9IjQ0OS42MSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMTRfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2OS40OTEiIHgyPSIzODUuOTIxIiB4bGluazpocmVmPSIjbGcxIiB5MT0iNDQ5LjYxIiB5Mj0iNDQ5LjYxIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xNV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTIuOTUxIiB4Mj0iNzk0LjQ2IiB4bGluazpocmVmPSIjbGcyIiB5MT0iNDc0LjU2IiB5Mj0iNDc0LjU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xNl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTQ4IiB4Mj0iNTI3LjAzMyIgeGxpbms6aHJlZj0iI2xnMiIgeTE9IjQ3NC41NiIgeTI9IjQ3NC41NiIvPjxnPjxnPjxnPjxwYXRoIGQ9Im0yNDMuOTA2IDEyNGMwLTExLjA1MS04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMWgtOTIuNzJjLTExLjA1MSAwLTIwLjAxIDguOTU5LTIwLjAxIDIwLjAxIDAgMTEuMDUxIDguOTU5IDIwLjAxIDIwLjAxIDIwLjAxaDkyLjcyYzExLjA1MSAwIDIwLjAxLTguOTU5IDIwLjAxLTIwLjAxeiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48L2c+PHBhdGggZD0ibTM1Ni4yMDIgNDY5LjYyaC0yNDEuMzY2bC04LjI3My0xNDYuOTk5Yy03LjEyMy0xMjYuNTc2IDcwLjc4Ny0yNDIuNDUgMTkwLjY5My0yODMuNjE2bDMuMDY1LTEuMDUyYzI3LjM4My05LjQwMSA1NC4wNyAxMC45NDYgNTQuMDcgMzkuODk3eiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48cGF0aCBkPSJtMjY0LjExNCA1Mi43ODF2MTI5LjI2OWgtMTI5LjA2NmMtNCA4LjE0LTcuNjEgMTYuNDktMTAuODIgMjUuMDFoMTE3LjAxMWMxMi42MzQgMCAyMi44NzYgMTAuMjQyIDIyLjg3NiAyMi44NzZ2NTQuOTY0aC0xNTcuMTU3Yy0uNjUgOC4yNi0uOTIgMTYuNjEtLjgyIDI1LjAxaDEzNS4xMDFjMTIuNjM0IDAgMjIuODc2IDEwLjI0MiAyMi44NzYgMjIuODc2djU0Ljk1NGgtMTUzLjg4N2wxLjQxIDI1LjAxaDEyOS42MDFjMTIuNjM0IDAgMjIuODc2IDEwLjI0MiAyMi44NzYgMjIuODc2djMzLjk5NGgzMi4wNzF2LTQzMC4yMzVjLTExLjA2MiAzLjg0Ny0yMS43NjUgOC4zMjctMzIuMDcyIDEzLjM5NnoiIGZpbGw9InVybCgjU1ZHSURfM18pIi8+PHBhdGggZD0ibTMzMS4xOTEgMzkuMzI4djEwNC43NGgtMjMuOTE3Yy00IDguMTQtNy42MSAxNi40OS0xMC44MiAyNS4wMWgxOS42MTRjOC4zNTIgMCAxNS4xMjMgNi43NzEgMTUuMTIzIDE1LjEyM3YyODUuNDE5aDI1LjAxMXYtMzkxLjc3Yy0uOTQ4LTE5Ljc3OC0xMC41NjktMzIuMDQ2LTI1LjAxMS0zOC41MjJ6IiBmaWxsPSJ1cmwoI1NWR0lEXzRfKSIvPjxwYXRoIGQ9Im0zMDguMjM0IDM3NC45OTljMC03LjAzNS01LjcwNC0xMi43MzktMTIuNzM5LTEyLjczOWgtMTYyLjc1Yy03LjAzNiAwLTEyLjczOSA1LjcwNC0xMi43MzkgMTIuNzM5czUuNzA0IDEyLjczOSAxMi43MzkgMTIuNzM5aDE2Mi43NWM3LjAzNi4wMDEgMTIuNzM5LTUuNzAzIDEyLjczOS0xMi43Mzl6IiBmaWxsPSJ1cmwoI1NWR0lEXzVfKSIvPjxwYXRoIGQ9Im0zMDguMjM0IDI3Mi4xNTZjMC03LjAzNS01LjcwNC0xMi43MzktMTIuNzM5LTEyLjczOWgtMTYyLjc1Yy03LjAzNiAwLTEyLjczOSA1LjcwNC0xMi43MzkgMTIuNzM5czUuNzA0IDEyLjczOSAxMi43MzkgMTIuNzM5aDE2Mi43NWM3LjAzNiAwIDEyLjczOS01LjcwNCAxMi43MzktMTIuNzM5eiIgZmlsbD0idXJsKCNTVkdJRF82XykiLz48cGF0aCBkPSJtMzA4LjIzNCAxNjkuMzEyYzAtNy4wMzUtNS43MDQtMTIuNzM5LTEyLjczOS0xMi43MzloLTEyNy4zMzdjLTcuMDM2IDAtMTIuNzM5IDUuNzA0LTEyLjczOSAxMi43MzlzNS43MDQgMTIuNzM5IDEyLjczOSAxMi43MzloMTI3LjMzN2M3LjAzNiAwIDEyLjczOS01LjcwNCAxMi43MzktMTIuNzM5eiIgZmlsbD0idXJsKCNTVkdJRF83XykiLz48cGF0aCBkPSJtMTI5LjgyMSAzNDUuODc4Yy03LjEyMy0xMjYuNTc2IDcwLjc4Ni0yNDIuNDUxIDE5MC42OTMtMjgzLjYxNmwzLjA2NS0xLjA1MmMxMC4yMTEtMy41MDUgMjAuNjU4LTIuNTcyIDI5LjY0MyAxLjA5OS01LjkxMS0xOS43OTItMzAuODc1LTMzLjkxOC01Mi45LTI2LjM1NmwtMy4wNjUgMS4wNTJjLTExOS45MDcgNDEuMTY2LTE5OS44MTcgMTU5LjA0LTE5Mi42OTQgMjg1LjYxNmw4LjI3MyAxNDYuOTk5aDIzLjk0OHoiIGZpbGw9InVybCgjU1ZHSURfOF8pIi8+PHBhdGggZD0ibTI2NC4xMTQgODguODc4YzEwLjMxNi02LjM0MyAyMS4xMS0xMi4wNjEgMzIuMzQtMTcuMDk5di0zNC40ODljLTExLjE0IDMuODYyLTIxLjkzMyA4LjM4NS0zMi4zNCAxMy41MTd6IiBmaWxsPSJ1cmwoI1NWR0lEXzlfKSIvPjxnPjxwYXRoIGQ9Im00MjIuNTczIDEyNGMwLTExLjA1MS04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMWgtOTIuNzJjLTExLjA1MSAwLTIwLjAxIDguOTU5LTIwLjAxIDIwLjAxIDAgMTEuMDUxIDguOTU5IDIwLjAxIDIwLjAxIDIwLjAxaDkyLjcyYzExLjA1MSAwIDIwLjAxLTguOTU5IDIwLjAxLTIwLjAxeiIgZmlsbD0idXJsKCNTVkdJRF8xMF8pIi8+PHBhdGggZD0ibTQwMi41NjMgMTAzLjk5aC00MC4wMmMxMS4wNTEgMCAyMC4wMSA4Ljk1OSAyMC4wMSAyMC4wMXMtOC45NTkgMjAuMDEtMjAuMDEgMjAuMDFoNDAuMDJjMTEuMDUxIDAgMjAuMDEtOC45NTkgMjAuMDEtMjAuMDFzLTguOTU5LTIwLjAxLTIwLjAxLTIwLjAxeiIgZmlsbD0idXJsKCNTVkdJRF8xMV8pIi8+PC9nPjxwYXRoIGQ9Im0yODkuMTI1IDQ2OS42MmgyNS40Nzh2LTQ1Ni40NTljMC03LjAxNC01LjQ4Ny0xMy4wMzEtMTIuNS0xMy4xNTktNy4xNDUtLjEzMS0xMi45NzggNS42MjItMTIuOTc4IDEyLjczN3oiIGZpbGw9InVybCgjU1ZHSURfMTJfKSIvPjxnPjxwYXRoIGQ9Im0zNzQuODg4IDQ0OS42MWMwLTExLjA1MS04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMWgtMjQ3LjQ0Yy0xMS4wNTEgMC0yMC4wMSA4Ljk1OS0yMC4wMSAyMC4wMSAwIDExLjA1MSA4Ljk1OSAyMC4wMSAyMC4wMSAyMC4wMWgyNDcuNDRjMTEuMDUxIDAgMjAuMDEtOC45NTkgMjAuMDEtMjAuMDF6IiBmaWxsPSJ1cmwoI1NWR0lEXzEzXykiLz48cGF0aCBkPSJtMzU0Ljg3OCA0MjkuNmgtNDAuMDJjMTEuMDUxIDAgMjAuMDEgOC45NTkgMjAuMDEgMjAuMDFzLTguOTU5IDIwLjAxLTIwLjAxIDIwLjAxaDQwLjAyYzExLjA1MSAwIDIwLjAxLTguOTU5IDIwLjAxLTIwLjAxcy04Ljk1OS0yMC4wMS0yMC4wMS0yMC4wMXoiIGZpbGw9InVybCgjU1ZHSURfMTRfKSIvPjwvZz48L2c+PGc+PHBhdGggZD0ibTUxMCA0ODIuODkxdjE0Ljg2N2MwIDYuNzYxLTUuNDgxIDEyLjI0Mi0xMi4yNDIgMTIuMjQyaC00ODUuNTE2Yy02Ljc2MSAwLTEyLjI0Mi01LjQ4MS0xMi4yNDItMTIuMjQydi0xNC44NzFjMC0xMC43ODMgOC43NjktMTkuNTg2IDE5LjU1MS0xOS40NTIgMTAuODAzLjEzNCAyMS42NDctMy45MTkgMjkuODg5LTEyLjE1NCA4LjEtOC4xMSAxOC43My0xMi4xNiAyOS4zNi0xMi4xNnMyMS4yNiA0LjA1IDI5LjM3IDEyLjE2YzguMTEgOC4xIDE4Ljc0IDEyLjE2IDI5LjM3IDEyLjE2IDEwLjYyIDAgMjEuMjUtNC4wNiAyOS4zNi0xMi4xNiA4LjExLTguMTEgMTguNzQtMTIuMTYgMjkuMzctMTIuMTZzMjEuMjUgNC4wNSAyOS4zNiAxMi4xNmM4LjExIDguMSAxOC43NCAxMi4xNiAyOS4zNyAxMi4xNnMyMS4yNi00LjA2IDI5LjM3LTEyLjE2YzguMTEtOC4xMSAxOC43My0xMi4xNiAyOS4zNi0xMi4xNnMyMS4yNiA0LjA1IDI5LjM3IDEyLjE2YzguMTEgOC4xIDE4Ljc0IDEyLjE2IDI5LjM2IDEyLjE2IDEwLjYzIDAgMjEuMjYtNC4wNiAyOS4zNy0xMi4xNiA4LjExLTguMTEgMTguNzQtMTIuMTYgMjkuMzctMTIuMTZzMjEuMjYgNC4wNSAyOS4zNiAxMi4xNmM4LjExIDguMSAxOC43NCAxMi4xNiAyOS4zNyAxMi4xNi4wNjkgMCAuMTM4IDAgLjIwOC0uMDAxIDEwLjkwNC0uMDU1IDE5Ljg2MiA4LjU0NiAxOS44NjIgMTkuNDUxeiIgZmlsbD0idXJsKCNTVkdJRF8xNV8pIi8+PHBhdGggZD0ibTQ5MC4xMzcgNDYzLjQzOWMtLjA2OSAwLS4xMzggMC0uMjA4IDAtMTAuNjMgMC0yMS4yNi00LjA2LTI5LjM3LTEyLjE2LTguMS04LjExLTE4LjczLTEyLjE2LTI5LjM2LTEyLjE2LTYuOTAyIDAtMTMuNzk5IDEuNzE5LTIwLjAxMSA1LjEzNiAzLjM1NCAxLjg0NiA2LjUxMSA0LjE4IDkuMzUxIDcuMDI0IDguMTEgOC4xIDE4Ljc0IDEyLjE2IDI5LjM3IDEyLjE2aC4yMDhjMTAuOTA1LS4wNTQgMTkuODYzIDguNTQ3IDE5Ljg2MyAxOS40NTF2MTQuODY3YzAgNi43NjEtNS40ODEgMTIuMjQyLTEyLjI0MiAxMi4yNDJoNDAuMDJjNi43NjEgMCAxMi4yNDItNS40ODEgMTIuMjQyLTEyLjI0MnYtMTQuODY3YzAtMTAuOTA0LTguOTU4LTE5LjUwNS0xOS44NjMtMTkuNDUxeiIgZmlsbD0idXJsKCNTVkdJRF8xNl8pIi8+PC9nPjwvZz48L3N2Zz4=" /></i></a>
												<div className="profile-icon-name">Dubai</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="single-profile">
										<div className="profile-txt">
											<a href=""><i className="flaticon"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkZsYXQiPjxwYXRoIGQ9Im0zNjAgMzI4aDg4djEyNGgtODh6IiBmaWxsPSIjY2NjIi8+PHBhdGggZD0ibTQyNCAzNjBoNzJ2OTJoLTcyeiIgZmlsbD0iI2U2ZTZlNiIvPjxnIGZpbGw9IiNmYzciPjxwYXRoIGQ9Im00ODAgMzg0aDE2djE2aC0xNnoiLz48cGF0aCBkPSJtNDQ4IDM4NGgxNnYxNmgtMTZ6Ii8+PHBhdGggZD0ibTM4NCAzNTJoMTZ2MTZoLTE2eiIvPjxwYXRoIGQ9Im0zODQgMzg0aDE2djE2aC0xNnoiLz48L2c+PHBhdGggZD0ibTMzNiA0MzJ2NjRoMTYwdi00OGEyMy45OTU1NSAyMy45OTU1NSAwIDAgMCAtNDAuMDcwMDctMTcuODIwMDcgMjMuOTg2ODcgMjMuOTg2ODcgMCAwIDAgLTQ0LjE0OTkzLTExLjA3OTgzIDIzLjk3MDM0IDIzLjk3MDM0IDAgMCAwIC0yOS4zIDQuNSAyMy45OTg3OSAyMy45OTg3OSAwIDAgMCAtNDYuNDggOC4zOTk5eiIgZmlsbD0iIzVjOTEzYSIvPjxwYXRoIGQ9Im02NCAzMjhoODh2MTI0aC04OHoiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJtMTYgMzYwaDcydjkyaC03MnoiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtMTYgMzg0aDE2djE2aC0xNnoiIGZpbGw9IiNmYzciLz48cGF0aCBkPSJtNDggMzg0aDE2djE2aC0xNnoiIGZpbGw9IiNmYzciLz48cGF0aCBkPSJtMTEyIDM1MmgxNnYxNmgtMTZ6IiBmaWxsPSIjZmM3Ii8+PHBhdGggZD0ibTExMiAzODRoMTZ2MTZoLTE2eiIgZmlsbD0iI2ZjNyIvPjxwYXRoIGQ9Im0xNzYgNDMydjY0aC0xNjB2LTQ4YTIzLjk5NTU1IDIzLjk5NTU1IDAgMCAxIDQwLjA3MDA3LTE3LjgyMDA3IDIzLjk4Njg3IDIzLjk4Njg3IDAgMCAxIDQ0LjE0OTkzLTExLjA3OTgzIDIzLjk3MDM0IDIzLjk3MDM0IDAgMCAxIDI5LjMgNC41IDIzLjk5ODc5IDIzLjk5ODc5IDAgMCAxIDQ2LjQ4IDguMzk5OXoiIGZpbGw9IiM1YzkxM2EiLz48cGF0aCBkPSJtMjgzLjE1NDMgMTI3LjE0MzU1LTExLjIwMDItMTA0YTcuOTk5ODIgNy45OTk4MiAwIDAgMCAtNy45NTQxLTcuMTQzNTVoLTE2YTcuOTk5ODIgNy45OTk4MiAwIDAgMCAtNy45NTQxIDcuMTQzNTVsLTExLjIwMDIgMTA0YTcuOTk5NTUgNy45OTk1NSAwIDAgMCA3Ljk1NDEgOC44NTY0NWgzOC40MDA0YTcuOTk5NTUgNy45OTk1NSAwIDAgMCA3Ljk1NDEtOC44NTY0NXptLTI2LjMzODg3LTk1LjE0MzU1IDYuMDMwMjcgNTZoLTEzLjY5MTY1bDYuMDMwNTItNTZ6bS0xMS4xMDc0MyA4OCAxLjcyMzE0LTE2aDE3LjEzNzdsMS43MjMxNCAxNnoiIGZpbGw9IiNlYjM1MmYiLz48cGF0aCBkPSJtMzc0LjkxMDE2IDQ4My45Njg3NS0xOC44MzU5NC0zMi4yOTFhNDY0Ljg4MDMgNDY0Ljg4MDMgMCAwIDEgLTI5LjgxMy02MC45NjUzMyA3Ljk3NTMgNy45NzUzIDAgMCAwIC0xLjMwNTY2LTMuMjQwMjMgNDY0LjcwMjM4IDQ2NC43MDIzOCAwIDAgMSAtMjEuMTQ2LTY5LjIwNzUyIDggOCAwIDAgMCAtNy44MDk1Ni02LjI2NDY3aC04MGE4IDggMCAwIDAgLTcuODA5NTcgNi4yNjQ2NSA0NjQuMzM5MTggNDY0LjMzOTE4IDAgMCAxIC01Mi4yNjQ2NSAxMzMuNDEzMDhsLTE4LjgzNTk0IDMyLjI5MWE3Ljk5OTgyIDcuOTk5ODIgMCAwIDAgNi45MTAxNiAxMi4wMzEyN2g0MGE4LjAwMDIzIDguMDAwMjMgMCAwIDAgNS45NDYyOS0yLjY0ODQ0bDQ3Ljk5MTIxLTUzLjMyMzI0YTI0LjQwNjQzIDI0LjQwNjQzIDAgMCAxIDYuMzE5ODItNS4wMzg4MmwzLjIxOC0xLjQ4Mzg4YTI0LjU5OSAyNC41OTkgMCAwIDEgMTguMDIyNzEuMzg5ODlsMS41NDk4LjcxNTgyYTI0LjM0MjkzIDI0LjM0MjkzIDAgMCAxIDcuMDE0NjUgNS40MTdsNDcuOTkxMjEgNTMuMzIzMjRhOC4wMDAyMyA4LjAwMDIzIDAgMCAwIDUuOTQ2MzEgMi42NDg0M2g0MGE3Ljk5OTgyIDcuOTk5ODIgMCAwIDAgNi45MTAxNi0xMi4wMzEyNXptLTc0LjU5Mjc4LTkyLjQ0ODI0LTQ0LjI0MTcgMjAuNDAwNjMtNDQuMTgzMS0yMC40MDM1NiA0NC4xNjA2NC0yMy4zMzEwNnptLTI3LjEyNzQ0LTMyLjM4NzcgMjEuNTYwNTUtMTEuMzkxMTFxMy44NzUyMyAxMy43NzIxIDguNTU5NTcgMjcuMjY5em0tNjQuNTQ0MTkgMTYuMDA0ODlxNC43MDY5MS0xMy41NjA3OSA4LjYwNjQ1LTI3LjQwNWwyMS42NTY0OSAxMS40MTYyNnptLTEwLjU0NTY1IDI3LjYzNDMgMzguODgwMTIgMTcuOTU0MzUtNjEuMTI2MjIgMjguMTg2MjVhNDgwLjY5MiA0ODAuNjkyIDAgMCAwIDIyLjI0NjEtNDYuMTQwNnptNzcuMDY1OSAxNy45NjUwNiAzOC43Ny0xNy44Nzc0NGE0ODAuNjE2NjkgNDgwLjYxNjY5IDAgMCAwIDIyLjE5ODczIDQ2LjAzMjQ3em0xNC40Ni05Mi43MzcwNmMuMzA0MiAxLjI4Nzg0LjYzMzMgMi41NjgxMi45NDc3NSAzLjg1Mjc4bC0zNC41MjgzMiAxOC4yNDI0My0zNC42MTc2OC0xOC4yNDg3N2MuMzE0MjEtMS4yODI0OC42NDI1OC0yLjU2MDguOTQ2MjktMy44NDY0NHptLTEwOS4xODg1IDE1MmgtMjIuNTA5NzdsNC4xNTE4Ni03LjExNzE5IDQyLjMzMTA1LTE5LjUxOTUzem0xNTEuMTI1IDAtMjQuMDE5NS0yNi42ODg0OCA0Mi4zNzYgMTkuNTY4ODUgNC4xNTMyNyA3LjExOTYzeiIgZmlsbD0iI2ViMzUyZiIvPjxwYXRoIGQ9Im0yODcuOTcyNjYgMjcxLjMzNTk0LTgtOTZhOC4wMDAyNSA4LjAwMDI1IDAgMCAwIC03Ljk3MjY2LTcuMzM1OTRoLTMyYTguMDAwMjUgOC4wMDAyNSAwIDAgMCAtNy45NzI2NiA3LjMzNTk0bC04IDk2YTguMDAwNzcgOC4wMDA3NyAwIDAgMCA3Ljk3MjY2IDguNjY0MDZoNDhhOC4wMDA3NyA4LjAwMDc3IDAgMCAwIDcuOTcyNjYtOC42NjQwNnptLTIzLjMzMzk5LTg3LjMzNTk0IDEuNzcwNTEgMjEuMjQyNDMtMTkuNDMwMTgtMTYuNjU0NTQuMzgyMzMtNC41ODc4OXptLS43MjU1OCA0MC4xNzY3Ni0yMS41MzEyNSAxOS41NzMyNCAyLjk1OC0zNS40OTM2NXptLTIwLjAxOTI5IDM5LjgyMzI0IDI1LjQ4MTItMjMuMTY1IDEuOTMwNjYgMjMuMTY1eiIgZmlsbD0iI2ViMzUyZiIvPjxwYXRoIGQ9Im0xOTIgMjcyaDMydjQ4aC0zMnoiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtMjg4IDI3MmgzMnY0OGgtMzJ6IiBmaWxsPSIjYjNiM2IzIi8+PHBhdGggZD0ibTIyNCAyNzJoNjR2NDhoLTY0eiIgZmlsbD0iI2NjYyIvPjxwYXRoIGQ9Im0yMDggMTI4aDk2djQ4aC05NnoiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtMTA0IDQ0OGgxNnY0OGgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PHBhdGggZD0ibTcyIDQ0MGgxNnY1NmgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PHBhdGggZD0ibTMyIDQ1NmgxNnY0MGgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0NDgiIGZpbGw9IiM2OTliNDkiIHI9IjI0Ii8+PGNpcmNsZSBjeD0iODAiIGN5PSI0MzIiIGZpbGw9IiM3YWI1NTUiIHI9IjI0Ii8+PGNpcmNsZSBjeD0iMTEyIiBjeT0iNDQwIiBmaWxsPSIjYTVjYjkyIiByPSIyNCIvPjxwYXRoIGQ9Im0zOTIgNDQ4aDE2djQ4aC0xNnoiIGZpbGw9IiNiYzhkNWQiLz48cGF0aCBkPSJtNDI0IDQ0MGgxNnY1NmgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PHBhdGggZD0ibTQ2NCA0NTZoMTZ2NDBoLTE2eiIgZmlsbD0iI2JjOGQ1ZCIvPjxjaXJjbGUgY3g9IjQ3MiIgY3k9IjQ0OCIgZmlsbD0iIzY5OWI0OSIgcj0iMjQiLz48Y2lyY2xlIGN4PSI0MzIiIGN5PSI0MzIiIGZpbGw9IiM3YWI1NTUiIHI9IjI0Ii8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iNDQwIiBmaWxsPSIjYTVjYjkyIiByPSIyNCIvPjwvZz48L3N2Zz4=" /></i></a>
											<div className="profile-icon-name">Japon</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href=""><i className="flaticon"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkZsYXQiPjxwYXRoIGQ9Im0zNjAgMzI4aDg4djEyNGgtODh6IiBmaWxsPSIjY2NjIi8+PHBhdGggZD0ibTQyNCAzNjBoNzJ2OTJoLTcyeiIgZmlsbD0iI2U2ZTZlNiIvPjxnIGZpbGw9IiNmYzciPjxwYXRoIGQ9Im00ODAgMzg0aDE2djE2aC0xNnoiLz48cGF0aCBkPSJtNDQ4IDM4NGgxNnYxNmgtMTZ6Ii8+PHBhdGggZD0ibTM4NCAzNTJoMTZ2MTZoLTE2eiIvPjxwYXRoIGQ9Im0zODQgMzg0aDE2djE2aC0xNnoiLz48L2c+PHBhdGggZD0ibTMzNiA0MzJ2NjRoMTYwdi00OGEyMy45OTU1NSAyMy45OTU1NSAwIDAgMCAtNDAuMDcwMDctMTcuODIwMDcgMjMuOTg2ODcgMjMuOTg2ODcgMCAwIDAgLTQ0LjE0OTkzLTExLjA3OTgzIDIzLjk3MDM0IDIzLjk3MDM0IDAgMCAwIC0yOS4zIDQuNSAyMy45OTg3OSAyMy45OTg3OSAwIDAgMCAtNDYuNDggOC4zOTk5eiIgZmlsbD0iIzVjOTEzYSIvPjxwYXRoIGQ9Im02NCAzMjhoODh2MTI0aC04OHoiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJtMTYgMzYwaDcydjkyaC03MnoiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtMTYgMzg0aDE2djE2aC0xNnoiIGZpbGw9IiNmYzciLz48cGF0aCBkPSJtNDggMzg0aDE2djE2aC0xNnoiIGZpbGw9IiNmYzciLz48cGF0aCBkPSJtMTEyIDM1MmgxNnYxNmgtMTZ6IiBmaWxsPSIjZmM3Ii8+PHBhdGggZD0ibTExMiAzODRoMTZ2MTZoLTE2eiIgZmlsbD0iI2ZjNyIvPjxwYXRoIGQ9Im0xNzYgNDMydjY0aC0xNjB2LTQ4YTIzLjk5NTU1IDIzLjk5NTU1IDAgMCAxIDQwLjA3MDA3LTE3LjgyMDA3IDIzLjk4Njg3IDIzLjk4Njg3IDAgMCAxIDQ0LjE0OTkzLTExLjA3OTgzIDIzLjk3MDM0IDIzLjk3MDM0IDAgMCAxIDI5LjMgNC41IDIzLjk5ODc5IDIzLjk5ODc5IDAgMCAxIDQ2LjQ4IDguMzk5OXoiIGZpbGw9IiM1YzkxM2EiLz48cGF0aCBkPSJtMjgzLjE1NDMgMTI3LjE0MzU1LTExLjIwMDItMTA0YTcuOTk5ODIgNy45OTk4MiAwIDAgMCAtNy45NTQxLTcuMTQzNTVoLTE2YTcuOTk5ODIgNy45OTk4MiAwIDAgMCAtNy45NTQxIDcuMTQzNTVsLTExLjIwMDIgMTA0YTcuOTk5NTUgNy45OTk1NSAwIDAgMCA3Ljk1NDEgOC44NTY0NWgzOC40MDA0YTcuOTk5NTUgNy45OTk1NSAwIDAgMCA3Ljk1NDEtOC44NTY0NXptLTI2LjMzODg3LTk1LjE0MzU1IDYuMDMwMjcgNTZoLTEzLjY5MTY1bDYuMDMwNTItNTZ6bS0xMS4xMDc0MyA4OCAxLjcyMzE0LTE2aDE3LjEzNzdsMS43MjMxNCAxNnoiIGZpbGw9IiNlYjM1MmYiLz48cGF0aCBkPSJtMzc0LjkxMDE2IDQ4My45Njg3NS0xOC44MzU5NC0zMi4yOTFhNDY0Ljg4MDMgNDY0Ljg4MDMgMCAwIDEgLTI5LjgxMy02MC45NjUzMyA3Ljk3NTMgNy45NzUzIDAgMCAwIC0xLjMwNTY2LTMuMjQwMjMgNDY0LjcwMjM4IDQ2NC43MDIzOCAwIDAgMSAtMjEuMTQ2LTY5LjIwNzUyIDggOCAwIDAgMCAtNy44MDk1Ni02LjI2NDY3aC04MGE4IDggMCAwIDAgLTcuODA5NTcgNi4yNjQ2NSA0NjQuMzM5MTggNDY0LjMzOTE4IDAgMCAxIC01Mi4yNjQ2NSAxMzMuNDEzMDhsLTE4LjgzNTk0IDMyLjI5MWE3Ljk5OTgyIDcuOTk5ODIgMCAwIDAgNi45MTAxNiAxMi4wMzEyN2g0MGE4LjAwMDIzIDguMDAwMjMgMCAwIDAgNS45NDYyOS0yLjY0ODQ0bDQ3Ljk5MTIxLTUzLjMyMzI0YTI0LjQwNjQzIDI0LjQwNjQzIDAgMCAxIDYuMzE5ODItNS4wMzg4MmwzLjIxOC0xLjQ4Mzg4YTI0LjU5OSAyNC41OTkgMCAwIDEgMTguMDIyNzEuMzg5ODlsMS41NDk4LjcxNTgyYTI0LjM0MjkzIDI0LjM0MjkzIDAgMCAxIDcuMDE0NjUgNS40MTdsNDcuOTkxMjEgNTMuMzIzMjRhOC4wMDAyMyA4LjAwMDIzIDAgMCAwIDUuOTQ2MzEgMi42NDg0M2g0MGE3Ljk5OTgyIDcuOTk5ODIgMCAwIDAgNi45MTAxNi0xMi4wMzEyNXptLTc0LjU5Mjc4LTkyLjQ0ODI0LTQ0LjI0MTcgMjAuNDAwNjMtNDQuMTgzMS0yMC40MDM1NiA0NC4xNjA2NC0yMy4zMzEwNnptLTI3LjEyNzQ0LTMyLjM4NzcgMjEuNTYwNTUtMTEuMzkxMTFxMy44NzUyMyAxMy43NzIxIDguNTU5NTcgMjcuMjY5em0tNjQuNTQ0MTkgMTYuMDA0ODlxNC43MDY5MS0xMy41NjA3OSA4LjYwNjQ1LTI3LjQwNWwyMS42NTY0OSAxMS40MTYyNnptLTEwLjU0NTY1IDI3LjYzNDMgMzguODgwMTIgMTcuOTU0MzUtNjEuMTI2MjIgMjguMTg2MjVhNDgwLjY5MiA0ODAuNjkyIDAgMCAwIDIyLjI0NjEtNDYuMTQwNnptNzcuMDY1OSAxNy45NjUwNiAzOC43Ny0xNy44Nzc0NGE0ODAuNjE2NjkgNDgwLjYxNjY5IDAgMCAwIDIyLjE5ODczIDQ2LjAzMjQ3em0xNC40Ni05Mi43MzcwNmMuMzA0MiAxLjI4Nzg0LjYzMzMgMi41NjgxMi45NDc3NSAzLjg1Mjc4bC0zNC41MjgzMiAxOC4yNDI0My0zNC42MTc2OC0xOC4yNDg3N2MuMzE0MjEtMS4yODI0OC42NDI1OC0yLjU2MDguOTQ2MjktMy44NDY0NHptLTEwOS4xODg1IDE1MmgtMjIuNTA5NzdsNC4xNTE4Ni03LjExNzE5IDQyLjMzMTA1LTE5LjUxOTUzem0xNTEuMTI1IDAtMjQuMDE5NS0yNi42ODg0OCA0Mi4zNzYgMTkuNTY4ODUgNC4xNTMyNyA3LjExOTYzeiIgZmlsbD0iI2ViMzUyZiIvPjxwYXRoIGQ9Im0yODcuOTcyNjYgMjcxLjMzNTk0LTgtOTZhOC4wMDAyNSA4LjAwMDI1IDAgMCAwIC03Ljk3MjY2LTcuMzM1OTRoLTMyYTguMDAwMjUgOC4wMDAyNSAwIDAgMCAtNy45NzI2NiA3LjMzNTk0bC04IDk2YTguMDAwNzcgOC4wMDA3NyAwIDAgMCA3Ljk3MjY2IDguNjY0MDZoNDhhOC4wMDA3NyA4LjAwMDc3IDAgMCAwIDcuOTcyNjYtOC42NjQwNnptLTIzLjMzMzk5LTg3LjMzNTk0IDEuNzcwNTEgMjEuMjQyNDMtMTkuNDMwMTgtMTYuNjU0NTQuMzgyMzMtNC41ODc4OXptLS43MjU1OCA0MC4xNzY3Ni0yMS41MzEyNSAxOS41NzMyNCAyLjk1OC0zNS40OTM2NXptLTIwLjAxOTI5IDM5LjgyMzI0IDI1LjQ4MTItMjMuMTY1IDEuOTMwNjYgMjMuMTY1eiIgZmlsbD0iI2ViMzUyZiIvPjxwYXRoIGQ9Im0xOTIgMjcyaDMydjQ4aC0zMnoiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtMjg4IDI3MmgzMnY0OGgtMzJ6IiBmaWxsPSIjYjNiM2IzIi8+PHBhdGggZD0ibTIyNCAyNzJoNjR2NDhoLTY0eiIgZmlsbD0iI2NjYyIvPjxwYXRoIGQ9Im0yMDggMTI4aDk2djQ4aC05NnoiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtMTA0IDQ0OGgxNnY0OGgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PHBhdGggZD0ibTcyIDQ0MGgxNnY1NmgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PHBhdGggZD0ibTMyIDQ1NmgxNnY0MGgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0NDgiIGZpbGw9IiM2OTliNDkiIHI9IjI0Ii8+PGNpcmNsZSBjeD0iODAiIGN5PSI0MzIiIGZpbGw9IiM3YWI1NTUiIHI9IjI0Ii8+PGNpcmNsZSBjeD0iMTEyIiBjeT0iNDQwIiBmaWxsPSIjYTVjYjkyIiByPSIyNCIvPjxwYXRoIGQ9Im0zOTIgNDQ4aDE2djQ4aC0xNnoiIGZpbGw9IiNiYzhkNWQiLz48cGF0aCBkPSJtNDI0IDQ0MGgxNnY1NmgtMTZ6IiBmaWxsPSIjYmM4ZDVkIi8+PHBhdGggZD0ibTQ2NCA0NTZoMTZ2NDBoLTE2eiIgZmlsbD0iI2JjOGQ1ZCIvPjxjaXJjbGUgY3g9IjQ3MiIgY3k9IjQ0OCIgZmlsbD0iIzY5OWI0OSIgcj0iMjQiLz48Y2lyY2xlIGN4PSI0MzIiIGN5PSI0MzIiIGZpbGw9IiM3YWI1NTUiIHI9IjI0Ii8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iNDQwIiBmaWxsPSIjYTVjYjkyIiByPSIyNCIvPjwvZz48L3N2Zz4=" /></i></a>
												<div className="profile-icon-name">Japon</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="single-profile">
										<div className="profile-txt">
											<a href=""><i className="flaticon"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI1NiA0NmgtMTA1djEyMGgxMDUgMTA1di0xMjB6IiBmaWxsPSIjZTY5ZjZlIi8+PHBhdGggZD0ibTI1NiA0NmgxMDV2MTIwaC0xMDV6IiBmaWxsPSIjY2M4MjVkIi8+PHBhdGggZD0ibTMwMSAxNTEtMzAgMzBoLTE1LTE1bC0zMC0zMGgtOTB2OTBoMTM1IDEzNXYtOTB6IiBmaWxsPSIjZmZjMDgwIi8+PHBhdGggZD0ibTM5MSAxNTFoLTkwbC0zMCAzMGgtMTV2NjBoMTM1eiIgZmlsbD0iI2U2OWY2ZSIvPjxwYXRoIGQ9Im0yNTYgMjExaC0xNjV2OTBoMTY1IDE2NXYtOTB6IiBmaWxsPSIjZTY5ZjZlIi8+PHBhdGggZD0ibTI1NiAyMTFoMTY1djkwaC0xNjV6IiBmaWxsPSIjY2M4MjVkIi8+PHBhdGggZD0ibTI1NiAyNzFoLTE5NXY5MGgxOTUgMTk1di05MHoiIGZpbGw9IiNmZmMwODAiLz48cGF0aCBkPSJtMjU2IDI3MWgxOTV2OTBoLTE5NXoiIGZpbGw9IiNlNjlmNmUiLz48cGF0aCBkPSJtMjU2IDMzMWgtMjI1djkwaDIyNSAyMjV2LTkweiIgZmlsbD0iI2U2OWY2ZSIvPjxwYXRoIGQ9Im0yNTYgMzMxaDIyNXY5MGgtMjI1eiIgZmlsbD0iI2NjODI1ZCIvPjxwYXRoIGQ9Im0yNTYgMzkxaC0yNTZ2OTBoMTIxbDMwLTMwaDEwNSAxMDVsMzAgMzBoMTIxdi05MHoiIGZpbGw9IiNmZmMwODAiLz48cGF0aCBkPSJtMzkxIDQ4MWgxMjF2LTkwaC0yNTZ2NjBoMTA1eiIgZmlsbD0iI2U2OWY2ZSIvPjxwYXRoIGQ9Im0yNTYgOTFjLTI0LjgxNCAwLTQ1IDIwLjE4Ni00NSA0NXYzMGg0NSA0NXYtMzBjMC0yNC44MTQtMjAuMTg2LTQ1LTQ1LTQ1eiIgZmlsbD0iI2IzNzA1OSIvPjxwYXRoIGQ9Im0zMDEgMTM2YzAtMjQuODE0LTIwLjE4Ni00NS00NS00NXY3NWg0NXoiIGZpbGw9IiM5OTVhNGQiLz48cGF0aCBkPSJtMjU2IDMxaC0xMzV2MzBoMTM1IDEzNXYtMzB6IiBmaWxsPSIjZmZjMDgwIi8+PHBhdGggZD0ibTI1NiAzMWgxMzV2MzBoLTEzNXoiIGZpbGw9IiNlNjlmNmUiLz48ZyBmaWxsPSIjZTFlNmYwIj48cGF0aCBkPSJtMjU2IDI4Nmg0NWwzMi43MjYtMTUtMTYuMzYyLTYwLTE2LjM2NC0xNWgtNDUtNDVsLTE2LjM2NCAxNS0xNi4zNjIgNjAgMzIuNzI2IDE1eiIvPjxwYXRoIGQ9Im0zNTAuMDkxIDMzMS0xOS4wOTEtMTVoLTc1LTc1bC0xOS4wOTEgMTUtMTYuMzY0IDYwIDM1LjQ1NSAxNWg3NSA3NWwzNS40NTUtMTV6Ii8+PC9nPjxwYXRoIGQ9Im0zNjYuNDU1IDM5MS0xNi4zNjQtNjAtMTkuMDkxLTE1aC03NXY5MGg3NXoiIGZpbGw9IiNjZmQ3ZTYiLz48cGF0aCBkPSJtMzMzLjcyNiAyNzEtMTYuMzYyLTYwLTE2LjM2NC0xNWgtNDV2OTBoNDV6IiBmaWxsPSIjY2ZkN2U2Ii8+PHBhdGggZD0ibTM2Ni40NTUgMzkxaC0xMTAuNDU1LTExMC40NTVsLTI0LjU0NSA5MGgxMzUgMTM1eiIgZmlsbD0iI2YzZjVmOSIvPjxwYXRoIGQ9Im0zNTAuMDkxIDMzMS0xNi4zNjUtNjBoLTc3LjcyNi03Ny43MjZsLTE2LjM2NSA2MGg5NC4wOTF6IiBmaWxsPSIjZjNmNWY5Ii8+PHBhdGggZD0ibTMxNy4zNjQgMjExLTE2LjM2NC02MGgtNDUtNDVsLTE2LjM2NCA2MGg2MS4zNjR6IiBmaWxsPSIjZjNmNWY5Ii8+PGcgZmlsbD0iI2UxZTZmMCI+PHBhdGggZD0ibTM2Ni40NTUgMzkxaC0xMTAuNDU1djkwaDEzNXoiLz48cGF0aCBkPSJtMzMzLjcyNiAyNzFoLTc3LjcyNnY2MGg5NC4wOTF6Ii8+PHBhdGggZD0ibTMwMSAxNTFoLTQ1djYwaDYxLjM2NHoiLz48L2c+PC9nPjwvc3ZnPg==" /></i></a>
											<div className="profile-icon-name">Méxique</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href=""><i className="flaticon"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI1NiA0NmgtMTA1djEyMGgxMDUgMTA1di0xMjB6IiBmaWxsPSIjZTY5ZjZlIi8+PHBhdGggZD0ibTI1NiA0NmgxMDV2MTIwaC0xMDV6IiBmaWxsPSIjY2M4MjVkIi8+PHBhdGggZD0ibTMwMSAxNTEtMzAgMzBoLTE1LTE1bC0zMC0zMGgtOTB2OTBoMTM1IDEzNXYtOTB6IiBmaWxsPSIjZmZjMDgwIi8+PHBhdGggZD0ibTM5MSAxNTFoLTkwbC0zMCAzMGgtMTV2NjBoMTM1eiIgZmlsbD0iI2U2OWY2ZSIvPjxwYXRoIGQ9Im0yNTYgMjExaC0xNjV2OTBoMTY1IDE2NXYtOTB6IiBmaWxsPSIjZTY5ZjZlIi8+PHBhdGggZD0ibTI1NiAyMTFoMTY1djkwaC0xNjV6IiBmaWxsPSIjY2M4MjVkIi8+PHBhdGggZD0ibTI1NiAyNzFoLTE5NXY5MGgxOTUgMTk1di05MHoiIGZpbGw9IiNmZmMwODAiLz48cGF0aCBkPSJtMjU2IDI3MWgxOTV2OTBoLTE5NXoiIGZpbGw9IiNlNjlmNmUiLz48cGF0aCBkPSJtMjU2IDMzMWgtMjI1djkwaDIyNSAyMjV2LTkweiIgZmlsbD0iI2U2OWY2ZSIvPjxwYXRoIGQ9Im0yNTYgMzMxaDIyNXY5MGgtMjI1eiIgZmlsbD0iI2NjODI1ZCIvPjxwYXRoIGQ9Im0yNTYgMzkxaC0yNTZ2OTBoMTIxbDMwLTMwaDEwNSAxMDVsMzAgMzBoMTIxdi05MHoiIGZpbGw9IiNmZmMwODAiLz48cGF0aCBkPSJtMzkxIDQ4MWgxMjF2LTkwaC0yNTZ2NjBoMTA1eiIgZmlsbD0iI2U2OWY2ZSIvPjxwYXRoIGQ9Im0yNTYgOTFjLTI0LjgxNCAwLTQ1IDIwLjE4Ni00NSA0NXYzMGg0NSA0NXYtMzBjMC0yNC44MTQtMjAuMTg2LTQ1LTQ1LTQ1eiIgZmlsbD0iI2IzNzA1OSIvPjxwYXRoIGQ9Im0zMDEgMTM2YzAtMjQuODE0LTIwLjE4Ni00NS00NS00NXY3NWg0NXoiIGZpbGw9IiM5OTVhNGQiLz48cGF0aCBkPSJtMjU2IDMxaC0xMzV2MzBoMTM1IDEzNXYtMzB6IiBmaWxsPSIjZmZjMDgwIi8+PHBhdGggZD0ibTI1NiAzMWgxMzV2MzBoLTEzNXoiIGZpbGw9IiNlNjlmNmUiLz48ZyBmaWxsPSIjZTFlNmYwIj48cGF0aCBkPSJtMjU2IDI4Nmg0NWwzMi43MjYtMTUtMTYuMzYyLTYwLTE2LjM2NC0xNWgtNDUtNDVsLTE2LjM2NCAxNS0xNi4zNjIgNjAgMzIuNzI2IDE1eiIvPjxwYXRoIGQ9Im0zNTAuMDkxIDMzMS0xOS4wOTEtMTVoLTc1LTc1bC0xOS4wOTEgMTUtMTYuMzY0IDYwIDM1LjQ1NSAxNWg3NSA3NWwzNS40NTUtMTV6Ii8+PC9nPjxwYXRoIGQ9Im0zNjYuNDU1IDM5MS0xNi4zNjQtNjAtMTkuMDkxLTE1aC03NXY5MGg3NXoiIGZpbGw9IiNjZmQ3ZTYiLz48cGF0aCBkPSJtMzMzLjcyNiAyNzEtMTYuMzYyLTYwLTE2LjM2NC0xNWgtNDV2OTBoNDV6IiBmaWxsPSIjY2ZkN2U2Ii8+PHBhdGggZD0ibTM2Ni40NTUgMzkxaC0xMTAuNDU1LTExMC40NTVsLTI0LjU0NSA5MGgxMzUgMTM1eiIgZmlsbD0iI2YzZjVmOSIvPjxwYXRoIGQ9Im0zNTAuMDkxIDMzMS0xNi4zNjUtNjBoLTc3LjcyNi03Ny43MjZsLTE2LjM2NSA2MGg5NC4wOTF6IiBmaWxsPSIjZjNmNWY5Ii8+PHBhdGggZD0ibTMxNy4zNjQgMjExLTE2LjM2NC02MGgtNDUtNDVsLTE2LjM2NCA2MGg2MS4zNjR6IiBmaWxsPSIjZjNmNWY5Ii8+PGcgZmlsbD0iI2UxZTZmMCI+PHBhdGggZD0ibTM2Ni40NTUgMzkxaC0xMTAuNDU1djkwaDEzNXoiLz48cGF0aCBkPSJtMzMzLjcyNiAyNzFoLTc3LjcyNnY2MGg5NC4wOTF6Ii8+PHBhdGggZD0ibTMwMSAxNTFoLTQ1djYwaDYxLjM2NHoiLz48L2c+PC9nPjwvc3ZnPg==" /></i></a>
												<div className="profile-icon-name">Méxique</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="single-profile profile-no-border">
										<div className="profile-txt">
											<a href=""><i className="flaticon-newYork"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjEycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLTcxIDAgNjEyIDYxMiIgd2lkdGg9IjYxMnB0Ij4KPGcgaWQ9InN1cmZhY2UxIj4KPHBhdGggZD0iTSAxODMuNjAxNTYyIDEwMiBMIDI4NS42MDE1NjIgMTAyIEwgMjg1LjYwMTU2MiA1NDAuNjAxNTYyIEwgMTgzLjYwMTU2MiA1NDAuNjAxNTYyIFogTSAxODMuNjAxNTYyIDEwMiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjQuMzEzNzI1JSw1My43MjU0OSUsNzQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDE2My4xOTkyMTkgMTUzIEwgMjA0IDE1MyBMIDIwNCA1NDAuNjAxNTYyIEwgMTYzLjE5OTIxOSA1NDAuNjAxNTYyIFogTSAxNjMuMTk5MjE5IDE1MyAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjYuMjc0NTElLDU4LjAzOTIxNiUsODAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjY1LjE5OTIxOSAxNTMgTCAzMDYgMTUzIEwgMzA2IDU0MC42MDE1NjIgTCAyNjUuMTk5MjE5IDU0MC42MDE1NjIgWiBNIDI2NS4xOTkyMTkgMTUzICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyNi4yNzQ1MSUsNTguMDM5MjE2JSw4MCUpO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAyNDQuODAwNzgxIDUxIEwgMjU1IDcxLjM5ODQzOCBMIDI1NSAxMDIgTCAyMTQuMTk5MjE5IDEwMiBMIDIxNC4xOTkyMTkgNzEuMzk4NDM4IEwgMjI0LjM5ODQzOCA1MSBaIE0gMjQ0LjgwMDc4MSA1MSAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjYuMjc0NTElLDU4LjAzOTIxNiUsODAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjI0LjM5ODQzOCAwIEwgMjQ0LjgwMDc4MSAwIEwgMjQ0LjgwMDc4MSA1MSBMIDIyNC4zOTg0MzggNTEgWiBNIDIyNC4zOTg0MzggMCAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjYuMjc0NTElLDU4LjAzOTIxNiUsODAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjA0IDQwOCBMIDI2NS4xOTkyMTkgNDA4IEwgMjY1LjE5OTIxOSA1NDAuNjAxNTYyIEwgMjA0IDU0MC42MDE1NjIgWiBNIDIwNCA0MDggIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI5LjAxOTYwOCUsNjEuNTY4NjI3JSw4NS4wOTgwMzklKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMTQyLjgwMDc4MSA0NDguODAwNzgxIEwgMjA0IDQ0OC44MDA3ODEgTCAyMDQgNTQwLjYwMTU2MiBMIDE0Mi44MDA3ODEgNTQwLjYwMTU2MiBaIE0gMTQyLjgwMDc4MSA0NDguODAwNzgxICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyNi4yNzQ1MSUsNTguMDM5MjE2JSw4MCUpO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAxMDIgNDg5LjYwMTU2MiBMIDE0Mi44MDA3ODEgNDg5LjYwMTU2MiBMIDE0Mi44MDA3ODEgNTQwLjYwMTU2MiBMIDEwMiA1NDAuNjAxNTYyIFogTSAxMDIgNDg5LjYwMTU2MiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjQuMzEzNzI1JSw1My43MjU0OSUsNzQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDI2NS4xOTkyMTkgNDQ4LjgwMDc4MSBMIDMyNi4zOTg0MzggNDQ4LjgwMDc4MSBMIDMyNi4zOTg0MzggNTQwLjYwMTU2MiBMIDI2NS4xOTkyMTkgNTQwLjYwMTU2MiBaIE0gMjY1LjE5OTIxOSA0NDguODAwNzgxICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyNi4yNzQ1MSUsNTguMDM5MjE2JSw4MCUpO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAzMjYuMzk4NDM4IDQ4OS42MDE1NjIgTCAzNjcuMTk5MjE5IDQ4OS42MDE1NjIgTCAzNjcuMTk5MjE5IDU0MC42MDE1NjIgTCAzMjYuMzk4NDM4IDU0MC42MDE1NjIgWiBNIDMyNi4zOTg0MzggNDg5LjYwMTU2MiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjQuMzEzNzI1JSw1My43MjU0OSUsNzQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDQzOC42MDE1NjIgNTkxLjYwMTU2MiBMIDQzOC42MDE1NjIgNTQwLjYwMTU2MiBMIDMwLjYwMTU2MiA1NDAuNjAxNTYyIEwgMzAuNjAxNTYyIDU5MS42MDE1NjIgTCAwIDU5MS42MDE1NjIgTCAwIDYxMiBMIDQ2OS4xOTkyMTkgNjEyIEwgNDY5LjE5OTIxOSA1OTEuNjAxNTYyIFogTSA0MzguNjAxNTYyIDU5MS42MDE1NjIgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI2LjI3NDUxJSw1OC4wMzkyMTYlLDgwJSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDE5My44MDA3ODEgNjEyIEwgMTUzIDYxMiBMIDE1MyA1NDAuNjAxNTYyIEMgMTY1LjgzOTg0NCA1MzQuMTc1NzgxIDE4MC45NjA5MzggNTM0LjE3NTc4MSAxOTMuODAwNzgxIDU0MC42MDE1NjIgWiBNIDE5My44MDA3ODEgNjEyICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyOS4wMTk2MDglLDYxLjU2ODYyNyUsODUuMDk4MDM5JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDMxNi4xOTkyMTkgNjEyIEwgMjc1LjM5ODQzOCA2MTIgTCAyNzUuMzk4NDM4IDU0MC42MDE1NjIgQyAyODguMjQyMTg4IDUzNC4xNzU3ODEgMzAzLjM1OTM3NSA1MzQuMTc1NzgxIDMxNi4xOTkyMTkgNTQwLjYwMTU2MiBaIE0gMzE2LjE5OTIxOSA2MTIgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI5LjAxOTYwOCUsNjEuNTY4NjI3JSw4NS4wOTgwMzklKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjwvZz4KPC9zdmc+" /></i></a>
											<div className="profile-icon-name">New York</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href=""><i className="flaticon-newYork"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjEycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLTcxIDAgNjEyIDYxMiIgd2lkdGg9IjYxMnB0Ij4KPGcgaWQ9InN1cmZhY2UxIj4KPHBhdGggZD0iTSAxODMuNjAxNTYyIDEwMiBMIDI4NS42MDE1NjIgMTAyIEwgMjg1LjYwMTU2MiA1NDAuNjAxNTYyIEwgMTgzLjYwMTU2MiA1NDAuNjAxNTYyIFogTSAxODMuNjAxNTYyIDEwMiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjQuMzEzNzI1JSw1My43MjU0OSUsNzQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDE2My4xOTkyMTkgMTUzIEwgMjA0IDE1MyBMIDIwNCA1NDAuNjAxNTYyIEwgMTYzLjE5OTIxOSA1NDAuNjAxNTYyIFogTSAxNjMuMTk5MjE5IDE1MyAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjYuMjc0NTElLDU4LjAzOTIxNiUsODAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjY1LjE5OTIxOSAxNTMgTCAzMDYgMTUzIEwgMzA2IDU0MC42MDE1NjIgTCAyNjUuMTk5MjE5IDU0MC42MDE1NjIgWiBNIDI2NS4xOTkyMTkgMTUzICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyNi4yNzQ1MSUsNTguMDM5MjE2JSw4MCUpO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAyNDQuODAwNzgxIDUxIEwgMjU1IDcxLjM5ODQzOCBMIDI1NSAxMDIgTCAyMTQuMTk5MjE5IDEwMiBMIDIxNC4xOTkyMTkgNzEuMzk4NDM4IEwgMjI0LjM5ODQzOCA1MSBaIE0gMjQ0LjgwMDc4MSA1MSAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjYuMjc0NTElLDU4LjAzOTIxNiUsODAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjI0LjM5ODQzOCAwIEwgMjQ0LjgwMDc4MSAwIEwgMjQ0LjgwMDc4MSA1MSBMIDIyNC4zOTg0MzggNTEgWiBNIDIyNC4zOTg0MzggMCAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjYuMjc0NTElLDU4LjAzOTIxNiUsODAlKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMjA0IDQwOCBMIDI2NS4xOTkyMTkgNDA4IEwgMjY1LjE5OTIxOSA1NDAuNjAxNTYyIEwgMjA0IDU0MC42MDE1NjIgWiBNIDIwNCA0MDggIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI5LjAxOTYwOCUsNjEuNTY4NjI3JSw4NS4wOTgwMzklKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjxwYXRoIGQ9Ik0gMTQyLjgwMDc4MSA0NDguODAwNzgxIEwgMjA0IDQ0OC44MDA3ODEgTCAyMDQgNTQwLjYwMTU2MiBMIDE0Mi44MDA3ODEgNTQwLjYwMTU2MiBaIE0gMTQyLjgwMDc4MSA0NDguODAwNzgxICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyNi4yNzQ1MSUsNTguMDM5MjE2JSw4MCUpO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAxMDIgNDg5LjYwMTU2MiBMIDE0Mi44MDA3ODEgNDg5LjYwMTU2MiBMIDE0Mi44MDA3ODEgNTQwLjYwMTU2MiBMIDEwMiA1NDAuNjAxNTYyIFogTSAxMDIgNDg5LjYwMTU2MiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjQuMzEzNzI1JSw1My43MjU0OSUsNzQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDI2NS4xOTkyMTkgNDQ4LjgwMDc4MSBMIDMyNi4zOTg0MzggNDQ4LjgwMDc4MSBMIDMyNi4zOTg0MzggNTQwLjYwMTU2MiBMIDI2NS4xOTkyMTkgNTQwLjYwMTU2MiBaIE0gMjY1LjE5OTIxOSA0NDguODAwNzgxICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyNi4yNzQ1MSUsNTguMDM5MjE2JSw4MCUpO2ZpbGwtb3BhY2l0eToxOyIgLz4KPHBhdGggZD0iTSAzMjYuMzk4NDM4IDQ4OS42MDE1NjIgTCAzNjcuMTk5MjE5IDQ4OS42MDE1NjIgTCAzNjcuMTk5MjE5IDU0MC42MDE1NjIgTCAzMjYuMzk4NDM4IDU0MC42MDE1NjIgWiBNIDMyNi4zOTg0MzggNDg5LjYwMTU2MiAiIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMjQuMzEzNzI1JSw1My43MjU0OSUsNzQuMTE3NjQ3JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDQzOC42MDE1NjIgNTkxLjYwMTU2MiBMIDQzOC42MDE1NjIgNTQwLjYwMTU2MiBMIDMwLjYwMTU2MiA1NDAuNjAxNTYyIEwgMzAuNjAxNTYyIDU5MS42MDE1NjIgTCAwIDU5MS42MDE1NjIgTCAwIDYxMiBMIDQ2OS4xOTkyMTkgNjEyIEwgNDY5LjE5OTIxOSA1OTEuNjAxNTYyIFogTSA0MzguNjAxNTYyIDU5MS42MDE1NjIgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI2LjI3NDUxJSw1OC4wMzkyMTYlLDgwJSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDE5My44MDA3ODEgNjEyIEwgMTUzIDYxMiBMIDE1MyA1NDAuNjAxNTYyIEMgMTY1LjgzOTg0NCA1MzQuMTc1NzgxIDE4MC45NjA5MzggNTM0LjE3NTc4MSAxOTMuODAwNzgxIDU0MC42MDE1NjIgWiBNIDE5My44MDA3ODEgNjEyICIgc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigyOS4wMTk2MDglLDYxLjU2ODYyNyUsODUuMDk4MDM5JSk7ZmlsbC1vcGFjaXR5OjE7IiAvPgo8cGF0aCBkPSJNIDMxNi4xOTkyMTkgNjEyIEwgMjc1LjM5ODQzOCA2MTIgTCAyNzUuMzk4NDM4IDU0MC42MDE1NjIgQyAyODguMjQyMTg4IDUzNC4xNzU3ODEgMzAzLjM1OTM3NSA1MzQuMTc1NzgxIDMxNi4xOTkyMTkgNTQwLjYwMTU2MiBaIE0gMzE2LjE5OTIxOSA2MTIgIiBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDI5LjAxOTYwOCUsNjEuNTY4NjI3JSw4NS4wOTgwMzklKTtmaWxsLW9wYWNpdHk6MTsiIC8+CjwvZz4KPC9zdmc+" /></i></a>
												<div className="profile-icon-name">New York</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-border"></div>
							<div className="row">
								<div className="col-sm-3">
									<div className="single-profile">
										<div className="profile-txt">
											<a href=""><i className="flaticon-dubai"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeD0iNzEuNTY4IiBzdHlsZT0iZmlsbDojODU0RDI4OyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM5LjA4Ii8+DQo8cmVjdCB4PSIxMjUuNjk4IiBzdHlsZT0iZmlsbDojNzA0MDIxOyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM5LjA4Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjJEMUE1OyIgZD0iTTUwNS40NDQsNTEySDIzLjI3NlYzNDYuNzI3aDQ4Mi4xNjhMNTA1LjQ0NCw1MTJMNTA1LjQ0NCw1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTNBNzZGOyIgZD0iTTUwNS40NDQsNTEySDExMy42MzdWMzQ2LjcyN2gzOTEuODA3VjUxMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNBNjYyMzU7IiBkPSJNMTg3LjkxNSwxNTEuMDYySDM5LjM2TDcxLjU3MiwyNC4wODFoODQuMTNMMTg3LjkxNSwxNTEuMDYyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6Izk0NTcyRTsiIGQ9Ik0xODcuOTE1LDE1MS4wNjJoLTc0LjI3OFYyNC4wODFoNDIuMDY2TDE4Ny45MTUsMTUxLjA2MnoiLz4NCjxyZWN0IHg9IjYuNTUyIiB5PSI5NC4wNCIgc3R5bGU9ImZpbGw6I0E2NjIzNTsiIHdpZHRoPSIzMCIgaGVpZ2h0PSI0Mi4wMiIvPg0KPHJlY3QgeD0iMTkwLjcxOCIgeT0iOTQuMDQiIHN0eWxlPSJmaWxsOiM5NDU3MkU7IiB3aWR0aD0iMzAiIGhlaWdodD0iNDIuMDIiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkQxQTU7IiBkPSJNMjAzLjk5OSw1MTJIMjMuMjc2VjE3OC4zMzNoMTgwLjcyM1Y1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjJCQjg4OyIgZD0iTTIwMy45OTksNTEyaC05MC4zNjJWMTc4LjMzM2g5MC4zNjJWNTEyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0M0ODk1ODsiIGQ9Ik0yMjAuNzIzLDIwOC4zMzNINi41NTJ2LTg3LjI3MWgyMTQuMTd2ODcuMjcxSDIyMC43MjN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQjI3QTQ5OyIgZD0iTTIyMC43MjMsMjA4LjMzM0gxMTMuNjM3di04Ny4yNzFoMTA3LjA4NlYyMDguMzMzeiIvPg0KPHJlY3QgeD0iMTIzLjc1OCIgeT0iMjM2LjgxIiBzdHlsZT0iZmlsbDojNzA0MDIxOyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjY2LjQzIi8+DQo8cmVjdCB4PSI3My41MTgiIHk9IjIzNi44MSIgc3R5bGU9ImZpbGw6Izg1NEQyODsiIHdpZHRoPSIzMCIgaGVpZ2h0PSI2Ni40MyIvPg0KPHJlY3QgeD0iMTczLjk5OCIgeT0iMzQ2LjczIiBzdHlsZT0iZmlsbDojQzQ4OTU4OyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE2NS4yNyIvPg0KPHJlY3QgeD0iMjMuMjc2IiB5PSIzNDYuNzMiIHN0eWxlPSJmaWxsOiNGMkJCODg7IiB3aWR0aD0iMzAiIGhlaWdodD0iMTY1LjI3Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTU1QTY2OyIgZD0iTTE1NS43MDIsNTEyaC04NC4xM3YtNzAuOTkzYzAtMjMuMTk1LDE4Ljg3LTQyLjA2NSw0Mi4wNjUtNDIuMDY1czQyLjA2NSwxOC44Nyw0Mi4wNjUsNDIuMDY1VjUxMnoiDQoJLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ5NTI7IiBkPSJNMTU1LjcwMiw1MTJoLTQyLjA2NWMwLDAsMC04Mi42MzYsMC0xMTMuMDU4YzIzLjE5NSwwLDQyLjA2NSwxOC44Nyw0Mi4wNjUsNDIuMDY1VjUxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNDE0OTUyOyIgZD0iTTMwNi40MjUsNTEyaC04NC4xM3YtNzAuOTkzYzAtMjMuMTk1LDE4Ljg3MS00Mi4wNjUsNDIuMDY1LTQyLjA2NXM0Mi4wNjUsMTguODcsNDIuMDY1LDQyLjA2NVY1MTJ6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ5NTI7IiBkPSJNNDU3LjE0OCw1MTJoLTg0LjEzdi03MC45OTNjMC0yMy4xOTUsMTguODcxLTQyLjA2NSw0Mi4wNjUtNDIuMDY1czQyLjA2NSwxOC44Nyw0Mi4wNjUsNDIuMDY1VjUxMnoNCgkJIi8+DQo8L2c+DQo8cmVjdCB4PSI2LjU1MiIgeT0iMzMxLjczIiBzdHlsZT0iZmlsbDojQzQ4OTU4OyIgd2lkdGg9IjQ4My44OSIgaGVpZ2h0PSIzMCIvPg0KPHJlY3QgeD0iMTEzLjYzOCIgeT0iMzMxLjczIiBzdHlsZT0iZmlsbDojQjI3QTQ5OyIgd2lkdGg9IjM3Ni44MSIgaGVpZ2h0PSIzMCIvPg0KPHJlY3QgeD0iMjAzLjk5OCIgeT0iMzMxLjczIiBzdHlsZT0iZmlsbDojOUU2RjQ2OyIgd2lkdGg9IjI4Ni40NSIgaGVpZ2h0PSIzMCIvPg0KPGc+DQoJPHJlY3QgeD0iMzI0LjcxOCIgeT0iMzAzLjI1IiBzdHlsZT0iZmlsbDojQzQ4OTU4OyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwOC43NSIvPg0KCTxyZWN0IHg9IjQ3NS40NDgiIHk9IjMwMy4yNSIgc3R5bGU9ImZpbGw6I0M0ODk1ODsiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMDguNzUiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /></i></a>
											<div className="profile-icon-name">Prague</div>
										</div>
										<div className="single-profile-overlay">
											<div className="profile-txt">
												<a href=""><i className="flaticon-dubai"><img style={{marginLeft: "auto", marginRight: "auto",width: "2em"}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeD0iNzEuNTY4IiBzdHlsZT0iZmlsbDojODU0RDI4OyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM5LjA4Ii8+DQo8cmVjdCB4PSIxMjUuNjk4IiBzdHlsZT0iZmlsbDojNzA0MDIxOyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM5LjA4Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjJEMUE1OyIgZD0iTTUwNS40NDQsNTEySDIzLjI3NlYzNDYuNzI3aDQ4Mi4xNjhMNTA1LjQ0NCw1MTJMNTA1LjQ0NCw1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTNBNzZGOyIgZD0iTTUwNS40NDQsNTEySDExMy42MzdWMzQ2LjcyN2gzOTEuODA3VjUxMnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNBNjYyMzU7IiBkPSJNMTg3LjkxNSwxNTEuMDYySDM5LjM2TDcxLjU3MiwyNC4wODFoODQuMTNMMTg3LjkxNSwxNTEuMDYyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6Izk0NTcyRTsiIGQ9Ik0xODcuOTE1LDE1MS4wNjJoLTc0LjI3OFYyNC4wODFoNDIuMDY2TDE4Ny45MTUsMTUxLjA2MnoiLz4NCjxyZWN0IHg9IjYuNTUyIiB5PSI5NC4wNCIgc3R5bGU9ImZpbGw6I0E2NjIzNTsiIHdpZHRoPSIzMCIgaGVpZ2h0PSI0Mi4wMiIvPg0KPHJlY3QgeD0iMTkwLjcxOCIgeT0iOTQuMDQiIHN0eWxlPSJmaWxsOiM5NDU3MkU7IiB3aWR0aD0iMzAiIGhlaWdodD0iNDIuMDIiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkQxQTU7IiBkPSJNMjAzLjk5OSw1MTJIMjMuMjc2VjE3OC4zMzNoMTgwLjcyM1Y1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjJCQjg4OyIgZD0iTTIwMy45OTksNTEyaC05MC4zNjJWMTc4LjMzM2g5MC4zNjJWNTEyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0M0ODk1ODsiIGQ9Ik0yMjAuNzIzLDIwOC4zMzNINi41NTJ2LTg3LjI3MWgyMTQuMTd2ODcuMjcxSDIyMC43MjN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQjI3QTQ5OyIgZD0iTTIyMC43MjMsMjA4LjMzM0gxMTMuNjM3di04Ny4yNzFoMTA3LjA4NlYyMDguMzMzeiIvPg0KPHJlY3QgeD0iMTIzLjc1OCIgeT0iMjM2LjgxIiBzdHlsZT0iZmlsbDojNzA0MDIxOyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjY2LjQzIi8+DQo8cmVjdCB4PSI3My41MTgiIHk9IjIzNi44MSIgc3R5bGU9ImZpbGw6Izg1NEQyODsiIHdpZHRoPSIzMCIgaGVpZ2h0PSI2Ni40MyIvPg0KPHJlY3QgeD0iMTczLjk5OCIgeT0iMzQ2LjczIiBzdHlsZT0iZmlsbDojQzQ4OTU4OyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjE2NS4yNyIvPg0KPHJlY3QgeD0iMjMuMjc2IiB5PSIzNDYuNzMiIHN0eWxlPSJmaWxsOiNGMkJCODg7IiB3aWR0aD0iMzAiIGhlaWdodD0iMTY1LjI3Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTU1QTY2OyIgZD0iTTE1NS43MDIsNTEyaC04NC4xM3YtNzAuOTkzYzAtMjMuMTk1LDE4Ljg3LTQyLjA2NSw0Mi4wNjUtNDIuMDY1czQyLjA2NSwxOC44Nyw0Mi4wNjUsNDIuMDY1VjUxMnoiDQoJLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ5NTI7IiBkPSJNMTU1LjcwMiw1MTJoLTQyLjA2NWMwLDAsMC04Mi42MzYsMC0xMTMuMDU4YzIzLjE5NSwwLDQyLjA2NSwxOC44Nyw0Mi4wNjUsNDIuMDY1VjUxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNDE0OTUyOyIgZD0iTTMwNi40MjUsNTEyaC04NC4xM3YtNzAuOTkzYzAtMjMuMTk1LDE4Ljg3MS00Mi4wNjUsNDIuMDY1LTQyLjA2NXM0Mi4wNjUsMTguODcsNDIuMDY1LDQyLjA2NVY1MTJ6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MTQ5NTI7IiBkPSJNNDU3LjE0OCw1MTJoLTg0LjEzdi03MC45OTNjMC0yMy4xOTUsMTguODcxLTQyLjA2NSw0Mi4wNjUtNDIuMDY1czQyLjA2NSwxOC44Nyw0Mi4wNjUsNDIuMDY1VjUxMnoNCgkJIi8+DQo8L2c+DQo8cmVjdCB4PSI2LjU1MiIgeT0iMzMxLjczIiBzdHlsZT0iZmlsbDojQzQ4OTU4OyIgd2lkdGg9IjQ4My44OSIgaGVpZ2h0PSIzMCIvPg0KPHJlY3QgeD0iMTEzLjYzOCIgeT0iMzMxLjczIiBzdHlsZT0iZmlsbDojQjI3QTQ5OyIgd2lkdGg9IjM3Ni44MSIgaGVpZ2h0PSIzMCIvPg0KPHJlY3QgeD0iMjAzLjk5OCIgeT0iMzMxLjczIiBzdHlsZT0iZmlsbDojOUU2RjQ2OyIgd2lkdGg9IjI4Ni40NSIgaGVpZ2h0PSIzMCIvPg0KPGc+DQoJPHJlY3QgeD0iMzI0LjcxOCIgeT0iMzAzLjI1IiBzdHlsZT0iZmlsbDojQzQ4OTU4OyIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwOC43NSIvPg0KCTxyZWN0IHg9IjQ3NS40NDgiIHk9IjMwMy4yNSIgc3R5bGU9ImZpbGw6I0M0ODk1ODsiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMDguNzUiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" /></i></a>
												<div className="profile-icon-name">Prague</div>
											</div>
										</div>
									</div>
								</div>							
							</div>
						</div>
					</div>
				</div>

			</section>
			<section id="portfolio" className="portfolio">
				<div className="portfolio-details">
					<div className="section-heading text-center">
						<h2>Production</h2>
					</div>
					<div className="container">
						<div className="portfolio-content">
							<div className="isotope">
								<div className="row">
									{productionsMap}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</>
		);
    }
}
export {HomePage};