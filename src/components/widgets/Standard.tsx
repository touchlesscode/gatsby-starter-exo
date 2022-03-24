import React, { Fragment, useEffect, useState } from 'react';
import './Widget.css';

import { MediumContent, LargeContent, useTextKitWidget, WidgetViewSize } from '@statflo/textkit-widget-sdk-react'

const Widget = () => {
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
        setHasMounted(true);
    }, []);
    
    if (!hasMounted) {
        return null;
    }

    const { state, setHeader, setSize } = useTextKitWidget();
        
    const [headerReplaced, setHeaderReplaced] = useState<boolean>(false);

    const swapHeader = () => {
        if (headerReplaced) {
            setHeader('Your Standard Widget');
            setHeaderReplaced(false);
        } else {
            setHeader('My New Header');
            setHeaderReplaced(true);
        }
    }

    const closeWidget = () => {
        setSize(WidgetViewSize.Medium);
    }

    return (
        <Fragment>
            <MediumContent>
                <div className='widget-container'>
                    
                    <h1 className='widget-title'>
                        This is a Standard Widget. 
                    </h1>

                    <p className='widget-copy'>Standard Widgets are accessed by clicking the Widgets toggle in the right sidebar, can vary in size in the UI, and are meant to provide users with the ability to view information and/or perform actions directly in the TextKit UI.</p>

                    <p className='widget-copy'>Standard Widgets can speak directly with TextKit and can be customized however you need - build unique flows/tools or connect external apps.</p>

                    <a href='https://docs.textkit.io' rel='noreferrer' target="_blank" className='widget-link widget-link__doc'>Read our docs to learn more.</a>

                    <p className='widget-more'>Click show more to enlarge this widget</p>
                </div>
            </MediumContent>
            <LargeContent>
                <div className='widget-container' style={{ height: state ? state?.maxHeight : 100 }}>
                    <div className='widget-flex-container'>
                        
                        <h1 className='widget-title'>
                            This is the large view of a Standard Widget
                        </h1>

                        <p className='widget-copy'>You can use it if you need to show more  information or give your users more possibilities.</p>
                    </div>
                    <div className='widget-flex-container'>
                       
                    </div>
                    <div className='widget-action-bar'>
                        <button onClick={closeWidget} className='widget-cancel'>Cancel</button>
                        <button onClick={swapHeader} className='widget-button'>Change Header</button>
                    </div>
                </div>
            </LargeContent>
        </Fragment>
    )
}

export default Widget;