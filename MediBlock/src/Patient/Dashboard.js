import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationBtn, Card, FormColoredTextField, FormButton, CardSection, Info, List, navigatePush, topBarStyle } from '../components';
import styles from '../components/styles';
import styles2 from './styles';
import defaultStyles from '../components/defaultStyles';

class PatientDashboard extends React.Component {
    static get options() {
        return {
            topBar: topBarStyle("Patient's Dashboard")
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            did: "",
            name: "GG",
            phone: "",
            age: "",
            pid: "",
            patientDetail: {
                name: "HC",
                phone: "9234683242",
                age: '19',
                records: [
                    {
                        did: 1,
                        details: "asdfsdf asdfasd fdsf ds",
                    },
                    {
                        did: 2,
                        details: "asdfsdf asdfasd fdsf ds",
                    },
                    {
                        did: 2,
                        details: "asdfsdf asdfasd fdsf ds",
                    }
                ]
            },
            patientDetailVisible: true
        }
    }

    componentDidMount() {
        // Call backend api to fetch data based on did
    }

    onRequest = () => {
        setTimeout(() => {
            navigatePush('PatientRequests', {
                did: this.state.did
            })
        }, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: defaultStyles.FONT_SIZE_HEADING }}>
                        Welcome, {this.state.name}!
                    </Text>
                </View>
                {this.state.patientDetailVisible &&
                    <Card customStyles={{ flex: 4, margin: 20, justifyContent: 'center', paddingTop: 20, paddingBottom: 20 }}>
                        <View style={{ flex: 2 }}>
                            <CardSection>
                                <Info title="Name" value={this.state.patientDetail.name} />
                            </CardSection>
                            <CardSection>
                                <Info title="Age" value={this.state.patientDetail.age} />
                            </CardSection>
                            <CardSection>
                                <Info title="Mobile No" value={this.state.patientDetail.phone} />
                            </CardSection>
                        </View>
                        <CardSection customStyles={{ flex: 3, elevation: 2, margin: defaultStyles.MARGIN_HORI }}>
                            <List
                                data={this.state.patientDetail.records}
                                renderItem={(item, index) => {
                                    return (
                                        <Card customStyles={{ marginBottom: defaultStyles.MARGIN_HORI }}>
                                            <CardSection>
                                                <Info title="Diagnosed by" value={item.did} />
                                            </CardSection>
                                            <CardSection>
                                                <Info title="Details" value={item.details} />
                                            </CardSection>
                                        </Card>
                                    )
                                }}
                            />
                        </CardSection>
                        <View style={{ flex: 1 }}>
                            <FormButton
                                value="Show Requests"
                                onFormSubmit={this.onRequest}
                            />
                        </View>
                    </Card>
                }
            </View >
        )
    }
}

export default PatientDashboard;