import React from 'react';
import {useSelector} from 'react-redux';

function Profile() {
    const user = useSelector(state => state.user.value)
    const theme = useSelector(state => state.theme.value)
    if(!user.name) {
        return
    }
  return (
    <div style={{'color': theme}}> {user.name}
    </div>
  )
}

export default Profile