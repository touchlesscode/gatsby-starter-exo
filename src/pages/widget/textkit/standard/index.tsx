import React, { useContext, useEffect, useState, useReducer } from 'react';
import { TextKitWidgetProvider } from '@statflo/textkit-widget-sdk-react';
import Widget from '../../../../components/widgets/Standard';



const SampleWidget = () => {
     
    return (
        <TextKitWidgetProvider header='Standard Widget' footer='Show More'>
            <Widget />
        </TextKitWidgetProvider>
    );
};

export default SampleWidget;
