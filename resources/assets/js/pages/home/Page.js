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
import {Link} from 'react-router-dom'
import AuthService from '../../services'

class Page extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.userName);
    }

    componentDidMount() {
        const social = this.props.match.params.social
        const params = this.props.location.search;

        setTimeout(function() { 

        if (params && social) {
            this.props.dispatch(AuthService.socialLogin({ params, social }))
                .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
                this.setState({
                    isLoading: false
                });
            })
        }

        }.bind(this), 1000);


    }

    render() {
        return (
            <div>
                <Segment
                    inverted
                    textAlign='center'
                    className='home-header'
                    vertical
                >
                    <Container text>
                        <Responsive minWidth={769}>
                            <Header
                                as="h2"
                                content="Something Cool"
                                inverted
                                className="pretitle"
                            />
                        </Responsive>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 logo-main">
                        </div>
                        <Header
                            as='p'
                            content='Coming Soon'
                            inverted
                            className="sub-heading"
                        />
                        <Button color="teal" size='huge' className="free-signup-button">
                            <Link to='/register' replace>Register</Link>
                        </Button>
                    </Container>
                </Segment>
                <div className="course-tour">
                    <Container textAlign="center" style={{padding: '2em 0em'}}>
                    </Container>
                    <Container className="step-container">
                        <Responsive minWidth={992}>
                            <Grid columns={1} padded="horizontally">
                                <Grid.Row>
                                    <Grid.Column>
                                        <p>Description About Me</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Responsive>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Page;