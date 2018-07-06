import React from 'react'
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
    }

    render() {
        return (
            <div>
            <PageHeader heading="Message"/>
            <Segment vertical textAlign='center' style={{minHeight: '100vh'}}>
            <Header as='h1'>Message</Header>
            <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mess-receive">
<div className="panel panel-warning">
    <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
    </div>
</div>
            </div>
            </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mess-sended">
<div className="panel panel-primary">
    <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
    </div>
</div>
            </div></div>
                </div>
            </div>

            </div>
            </div>
            </div>
            </Segment>
            </div>
            );
    }
}

export default Page;