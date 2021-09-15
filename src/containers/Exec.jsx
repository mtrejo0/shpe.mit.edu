import React, { Component } from 'react';
import information from '../information/officers_2021.json'
import Officer from '../components/officer';
import '../styles.css';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            officers: [],
        }
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            officers: this.loadOfficers()
        })
    }

    loadOfficers() {
        let officers = []

        information.information.forEach((officer) => {
            // officer = [photo (kerberos), name, position, email, year, major, bio]
            var photolink = process.env.PUBLIC_URL + `headshots/${officer[0]}.jpeg`;
            // oo == officer object
            var oo = {};
            oo.photo = photolink
            oo.name = officer[1]
            oo.position = officer[2]
            oo.email = officer[3]
            oo.year = officer[4]
            oo.major = officer[5]
            oo.bio = officer[6]

            officers.push(oo);
        })

        return officers;
    }

    getPhotoLink(name) {
        let link = "./headshots/"
        link.concat(name)
        link.concat('.png')
        return link;
    }   

    render() {

        return (
            <div className="officers">
                {
                    this.state.officers.map(i => {
                        return <Officer key={i.name} info={i}/>
                    })
                }
            </div>
        )
    }
}
