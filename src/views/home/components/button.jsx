import { Button } from 'antd';
import React, { useState } from 'react';

// import { Container } from './styles';

function button() {
    const [name, setName] = useState("");
    return <Button>
        <Text>{name} Hello</Text>
    </Button>;
}

export default button;