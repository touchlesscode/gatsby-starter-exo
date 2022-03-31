import React, { useContext, useEffect, useState, useReducer } from 'react';
import { TextKitWidgetProvider } from '@statflo/textkit-widget-sdk-react';
import Widget from '../../../../components/widgets/Action';


const SampleWidget = () => {
     
    return (
        <TextKitWidgetProvider header='Action Widget' label='My Action Label'>
            <Widget />
        </TextKitWidgetProvider>
    );
};

export default SampleWidget;
