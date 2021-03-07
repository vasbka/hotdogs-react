import React from 'react';
import * as axios from "axios";
import styles from './Hotdogs.module.scss'
const {REACT_APP_SERVER_API_URL} = process.env;

/**
 * Ideally whole work with API i would be move to the separate module.
 */
class Hotdogs extends React.Component {
    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_API_URL}/api/hot-dogs`)
            .then(response => this.props.setHotDogs(response.data));
    }

    update(hotDog) {
        //I know that it should be separate from the model.
        axios.put(`${REACT_APP_SERVER_API_URL}/api/hot-dogs/` + hotDog.id, {
            name: hotDog.name,
            description: hotDog.description,
            price: hotDog.price,
            imageLink: hotDog.imageLink
        })
            .then(response => {
                this.props.updateEditingHotDogData(response.data);
            });
    }

    delete(id) {
        axios.delete(`${REACT_APP_SERVER_API_URL}/api/hot-dogs/` + id)
            .then(response => {
                this.props.deleteEditingHotDog();
            })
    }


    render() {
        //probably it would be better if we will have separate element like HotDog and use it just like a container for arr of elements like hotdog.
        let hotDogs = this.props.hotDogsPage.hotDogs.map(item => {
            if (item.id === this.props.hotDogsPage.editId) {
                return this.renderEdit(this.props.hotDogsPage.editHotDogData);
            }
            return this.renderView(item);
        })

        return (<div className={styles.container}>
            {hotDogs}
        </div>);
    }

    renderView(item) {
        return (
            <div className={styles.hotdog}>
                <div>
                    <img src={item.imageLink ? item.imageLink : '#'} className={styles.image} alt=""/>
                </div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.price}>{item.price}</div>
                <div className={styles.description}>{item.description}</div>
                <button className={styles.edit} onClick={() => this.props.editHotDog(item.id)}>Edit</button>
            </div>
        );
    }

    renderEdit(item) {
        return (
            <div>
                <div>
                    <img src={item.imageLink ? item.imageLink : '#'} className={styles.image} alt=""/>
                </div>
                <input type="text" name="imageLink" value={item.imageLink} onChange={this.onChangeInput.bind(this)}/>
                <input type="text" name="name" value={item.name} onChange={this.onChangeInput.bind(this)}/>
                <input type="number" name="price" value={item.price} onChange={this.onChangeInput.bind(this)}/>
                <input type="text" name="description" value={item.description} onChange={this.onChangeInput.bind(this)}/>
                <button className={styles.edit} onClick={() => this.update(item)}>Update</button>
                <button className={styles.edit} onClick={() => this.delete(item.id)}>Delete</button>
            </div>
        );
    }

    onChangeInput(e) {
        this.props.changeEditingHotDogData(e.target.name, e.target.value);
    }
}

export default Hotdogs;
