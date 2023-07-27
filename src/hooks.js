import React, { useState } from 'react';

const useToggleFlip = (initialState = true) => {
    const [flip, setFlip] = useState(initialState);
    const toggleFlip = () => {
        setFlip(flip => !flip);
    }
    return [flip, toggleFlip]
}

export default useToggleFlip;