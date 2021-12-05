import { useState, useEffect } from 'react';



function Myprofile(){
    const [name, setName] = useState('');
    const [public_repos, setRepos] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [avatar_url, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/lazadi')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
              

    const setData = ({name,public_repos, followers, following, avatar_url, bio, location}) => {
        setName(name);
        setRepos(public_repos);
        setFollowers(followers);
        setFollowing(following);
        setAvatar(avatar_url);
        setBio(bio);
        setLocation(location);
    };


    return (
        <table className="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Avatar</th>
        <th>Location</th>
        <th>Bio</th>
        <th>Repositories</th>
        <th>Followers</th>
        <th>Following</th>
      </tr>
    </thead>
    <tbody>
    <tr>
          <td>{name}</td>
          <td>
            
              <img
                className="ui small circular image"
                src={avatar_url}
                alt={avatar_url}
              />

          </td>
          <td>{location}</td>
          <td>{bio}</td>
            <td>
            <div className="ui relaxed divided list" key={public_repos.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={public_repos.html_url} className="header" target="_blank">
                      {public_repos.name}
                    </a>
                  </div>
                </div>
              </div></td>
          <td>{followers}</td>
          <td>{following}</td>
        </tr>
    </tbody>
    </table>
    )
}

export default Myprofile;