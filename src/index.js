import React from 'react';
import { render } from 'react-dom';

function Hi() {
    return <p>Hi.</p>
}

redner(<Hi />, document.getElementById("app"));