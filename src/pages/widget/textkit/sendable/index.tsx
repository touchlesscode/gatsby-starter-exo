import React, { useContext, useEffect, useState, useReducer } from 'react';
import { TextKitWidgetProvider } from '@statflo/textkit-widget-sdk-react';
import Widget from '../../../../components/widgets/Sendable';


const SampleWidget = () => {
     
    return (
        <TextKitWidgetProvider header='Sendable Widget' label='Send a suggestion'>
            <Widget />
        </TextKitWidgetProvider>
    );
};

export default SampleWidget;
