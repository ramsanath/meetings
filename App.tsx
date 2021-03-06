import React from 'react';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import RegistrationForm from "./lib/ui/RegistrationForm";
import ParticipantsList from "./lib/ui/ParticipantsList";
import ParticipantDetail from "./lib/ui/ParticipantDetail";
import ParticipantSearchScreen from "./lib/ui/ParticipantSearchScreen";


const ParticipantsNavigator = createStackNavigator({
    List: ParticipantsList,
    Detail: ParticipantDetail,
    Search: ParticipantSearchScreen
}, {
    initialRouteName: 'List',
});

const FormNavigator = createStackNavigator({
    Form: RegistrationForm
});

const RootNavigator = createDrawerNavigator({
    Form: FormNavigator,
    Participants: ParticipantsNavigator,
});

export default createAppContainer(RootNavigator);
