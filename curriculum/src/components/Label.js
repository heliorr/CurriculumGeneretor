import React from 'react';

class Label extends React.Component {
    render() {
        const { name, value, type, textLabel, onChange } = this.props;
        return (
            <>
                <label>
                    { textLabel }
                </label>
                <input
                name={ name }
                value={ value }
                onChange={ onChange }
                type={ type }
                />
            </>
        );
    }
}

export default Label;