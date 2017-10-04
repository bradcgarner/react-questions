import React from 'react';

export default function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} min={props.min} max={props.max}
                onChange={e => props.onChg(e.target.value)} value={props.val} /> {/* what are the rules for 1st argument here?
                                                                                   onChange is a JSX-defined event listener term ?
                                                                                   1st argument of event listener is always event ?
                                                                                 */}
        </div>
    );
}

