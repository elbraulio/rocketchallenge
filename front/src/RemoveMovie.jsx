/**
 * Created by elbraulio 14-01-20
 */
import React, {useState} from "react";
import {Button} from "antd";

function RemoveMovie(props) {
    const [pending, setPending] = useState(false);
    const deleteMovie = () => {
        const {id, onRemove} = props;
        setPending(true);
        fetch(`/movies/${id}`,
            {
                method: 'DELETE',
            }
        ).then(res => {
            setPending(false);
            if (res.status === 200) {
                onRemove(id);
            }
        })
    };
    return (
        <Button icon="delete" onClick={deleteMovie} loading={pending}/>
    );
}

export default RemoveMovie;
