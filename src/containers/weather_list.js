import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchAdmin, fetchCC, fetchCOD} from '../actions/';
import { Container, Row, Col} from 'reactstrap';
import cod from '../cod';
//import { stat } from 'fs';

 class WeatherList extends Component {

    componentDidMount(){
        this.props.fetchAdmin();
        this.props.fetchCC();
        this.props.fetchCOD();
    }

    renderRoles(data){

    }
    
    renderRights = (data) => {
        console.log(data);
        let rights = [];
        const keys = Object.keys(data.rolesRights);
        for(let i = 0; i < keys.length; i++){
            rights.push(<li style={{fontWeight: 500, fontSize: '1.25rem', backgroundColor: 'lightblue', marginTop: 15}}key={keys[i]+' ' +Math.floor(Math.random()*100000000)}>{keys[i]}</li>)
            const roles = data.rolesRights[keys[i]].roleResources;
            for(let j = 0; j < roles.length; j++){
                rights.push(<ul key={roles[j].action+' ' +Math.floor(Math.random()*100000000)}>{roles[j].action}</ul>)
                for(let k = 0; k < roles[j].resources.length; k++){
                    rights.push(<li style={{fontStyle: 'italic', fontSize: '0.8rem'}}key={roles[j].resources[k]+' ' +Math.floor(Math.random()*100000000)}>{roles[j].resources[k]}</li>);
                }
            }
        }
        console.log(rights);
        return (
            <ul style={{listStyle: 'none'}}>
                <li style={{fontSize: '1.5rem', fontWeight: 500}}>{data.frontData.id}</li>
                {rights}
            </ul>
        );
    }

    render() {
        if(!this.props.cc || !this.props.admin || !this.props.cod)
            return <div></div>
        console.log(this.props);

        const {cc, admin, cod} = this.props;

        const adminRoles = this.renderRights(admin);
        const ccRoles = this.renderRights(cc);
        const codRoles = this.renderRights(cod);

        // const viewer = Object.keys(this.props.weather.Viewer.OptionalFeature).map((role) => {return (<li style={{fontColor: 'gray', fontStyle: 'italic'}} key={role}>{role}</li>);})
        // const purchaser = Object.keys(this.props.weather.Purchaser.OptionalFeature).map((role) => {return (<li style={{fontColor: 'gray', fontStyle: 'italic'}} key={role}>{role}</li>);})
        return (
            <Container>
                <Row style={{display: 'flex'}}>
                    <Col xs="6">
                        {adminRoles}
                    </Col>
                    <Col xs="6">
                        {ccRoles}
                    </Col>
                    <Col xs="6">
                        {codRoles}
                    </Col>
                </Row>
            </Container>
            // <table className="table table-hover">
            //     <thead>
            //         <tr>
            //             <th>City</th>
            //             <th>Temperature</th>
            //             <th>Pressure</th>
            //             <th>Humidity</th>
            //         </tr>    
            //     </thead>
            //     <tbody>
            //     {/* { this.props.weather && this.props.weather.map(item => this.renderWeather(item))} */}
            //     </tbody>    
            // </table>        
        );
    }
}

function mapStateToProps(state){
    // debugger
   return {
       cc : state.cc,
       admin: state.admin,
       cod : state.cod
    }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps, {fetchAdmin, fetchCC, fetchCOD})(WeatherList);