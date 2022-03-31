import React, { Fragment } from 'react';
import './Widget.css';
import icon from './action.svg';

import { useTextKitWidget } from '@statflo/textkit-widget-sdk-react'

const Widget = () => {
    
    if (typeof window !== undefined) {

        const { state, setOpen } = useTextKitWidget() || {};

        return (
            <div className='widget-container' style={{ height: state ? state?.maxHeight : 100 }}>
                <div className='widget-flex-container'>
                    <img src={icon} alt="Icon" />

                    <h1 className='widget-title'>
                        This is an Action Widget.
                    </h1>

                    <p className='widget-copy'>These widgets are accessed via the Actions menu and are meant to provide the user with tools to perform necessary functions.</p>

                    <p className='widget-copy'>Action widgets can speak directly with TextKit and can be customized however you need - build unique flows/tools or connect external apps.</p>

                    <a href='https://docs.textkit.io' rel='noreferrer' target="_blank" className='widget-link widget-link__doc'>Read our docs to learn more.</a>
                </div>
                <div className='widget-flex-container'>
                    Logo
                </div>
                <div className='widget-action-bar'>
                    <button onClick={() => setOpen(false)} className='widget-cancel'>Cancel</button>
                    <button onClick={() => setOpen(false)} className='widget-button'>Confirm</button>
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

export default Widget;