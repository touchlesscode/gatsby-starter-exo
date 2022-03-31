import React, { useContext, useEffect, useState, useReducer } from 'react';
import { TextKitWidgetProvider } from '@statflo/textkit-widget-sdk-react';
import Widget from '../../../../components/widgets/Timeline';



const SampleWidget = () => {
     
    return (
        <TextKitWidgetProvider header='Timeline Widget' label='Your timeline'>
            <Widget />
        </TextKitWidgetProvider>
    );
};

export default SampleWidget;
