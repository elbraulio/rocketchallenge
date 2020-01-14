import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Input, Row, Tag} from "antd";
import RemoveMovie from "./RemoveMovie";

function App() {

    const [movies, setMovies] = useState([]);
    const [tags, setTags] = useState([]);
    const [name, setName] = useState("");
    const [pending, setPending] = useState(false);

    useEffect(() => {
        fetch("/movies").then(data => data.json()).then(data => setMovies(data));
    }, []);

    const onRemove = id => {
        const newMovies = [];
        movies.forEach(m => {
            if (m._id !== id) newMovies.push(m);
        });
        setMovies(newMovies);
    };

    const newMovie = () => {
        setPending(true);
        fetch("/movies",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "createdAt": new Date(),
                    "tags": tags,
                }),
            }).then(res => {
            setPending(false);
            if (res.status === 201) {
                return res.json();
            }
        }).then(res => {
            const newMovies = movies;
            newMovies.push(res);
            setMovies(newMovies);
            setName("");
            setTags("");
        })
    };

    const renderMovies = () => {
        return movies.map(m => {
            return (
                <div style={{padding: 10}} key={m._id}>
                    <Card size="small" title={m.name}
                          extra={<RemoveMovie id={m._id} onRemove={onRemove}/>}
                          style={{width: 300}}>
                        <p>Created at: {m.createdAt}</p>
                        {m.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
                    </Card>
                </div>
            );
        });
    };

    return (
        <Row type="flex" justify="space-around" align="middle">
            <Col xs={10}>
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24} style={{padding: 10}}>
                        <Input placeholder="Name"
                               onChange={(v) => setName(v.target.value)}/>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24} style={{padding: 10}}>
                        <Input placeholder="Tags"
                               onChange={(v) => setTags(v.target.value.split(" "))}/>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24} style={{padding: 10}}>
                        <Button onClick={newMovie}
                                loading={pending}>Add</Button>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={24}>
                        {renderMovies()}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default App;
