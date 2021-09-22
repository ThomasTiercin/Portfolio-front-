import React from 'react';
import { LoginRoute } from '../_components';
import { LoginPage, HomePage, ExperiencePage, ExperienceCreate, ExperienceEdit, ExperienceDelete, DashboardPage, EducationPage, EducationCreate, EducationEdit, EducationDelete 
    ,ProfessionalSkillPage,ProfessionalSkillCreate,ProfessionalSkillEdit,ProfessionalSkillDelete,PersonalSkillPage,PersonalSkillCreate,PersonalSkillEdit,PersonalSkillDelete
    , CertificationPage, CertificationCreate, CertificationEdit, CertificationDelete , ProductionPage, ProductionCreate, ProductionEdit, ProductionDelete, Productions,OneProduction} from '../App'
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/productions" component={Productions} />
                    <Route exact path="/production/:id" component={OneProduction} />
                    <LoginRoute exact path="/dashboard" component={DashboardPage} />
                    <LoginRoute exact path="/admin/experiences" component={ExperiencePage} />
                    <LoginRoute exact path="/admin/createExperience" component={ExperienceCreate} />
                    <LoginRoute exact path="/admin/editExperience/:id" component={ExperienceEdit} />
                    <LoginRoute exact path="/admin/deleteExperience/:id" component={ExperienceDelete} />
                    <LoginRoute exact path="/admin/educations" component={EducationPage} />
                    <LoginRoute exact path="/admin/createEducation" component={EducationCreate} />
                    <LoginRoute exact path="/admin/editEducation/:id" component={EducationEdit} />
                    <LoginRoute exact path="/admin/deleteEducation/:id" component={EducationDelete} />
                    <LoginRoute exact path="/admin/professionalSkills" component={ProfessionalSkillPage} />
                    <LoginRoute exact path="/admin/createProfessionalSkill" component={ProfessionalSkillCreate} />
                    <LoginRoute exact path="/admin/editProfessionalSkill/:id" component={ProfessionalSkillEdit} />
                    <LoginRoute exact path="/admin/deleteProfessionalSkill/:id" component={ProfessionalSkillDelete} />
                    <LoginRoute exact path="/admin/personalSkills" component={PersonalSkillPage} />
                    <LoginRoute exact path="/admin/createPersonalSkill" component={PersonalSkillCreate} />
                    <LoginRoute exact path="/admin/editPersonalSkill/:id" component={PersonalSkillEdit} />
                    <LoginRoute exact path="/admin/deletePersonalSkill/:id" component={PersonalSkillDelete} />
                    <LoginRoute exact path="/admin/certifications" component={CertificationPage} />
                    <LoginRoute exact path="/admin/createCertification" component={CertificationCreate} />
                    <LoginRoute exact path="/admin/editCertification/:id" component={CertificationEdit} />
                    <LoginRoute exact path="/admin/deleteCertification/:id" component={CertificationDelete} />
                    <LoginRoute exact path="/admin/productions" component={ProductionPage} />
                    <LoginRoute exact path="/admin/createProduction" component={ProductionCreate} />
                    <LoginRoute exact path="/admin/editProduction/:id" component={ProductionEdit} />
                    <LoginRoute exact path="/admin/deleteProduction/:id" component={ProductionDelete} />
                </div>
            </Router>
        );
    }
}
export default App; 