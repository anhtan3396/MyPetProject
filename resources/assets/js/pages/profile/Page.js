import React from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Responsive,
    Segment,
    Step
} from 'semantic-ui-react'
import PageHeader from '../../common/pageHeader'

class Page extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.userName);
    }


    render() {
        return (
            <div>
            <PageHeader heading="Your Profile"/>
            <Segment vertical textAlign='center' style={{minHeight: '100vh'}}>
            <Header as='h1'>Your Profile</Header>
            
            </Segment>
            </div>
            );
    }
}
Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};
export default Page;