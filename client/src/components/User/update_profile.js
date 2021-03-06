import React from 'react';
import UserLayout from '../HighOrderComponents/user';
import UpdatePersonalNfo from './update_personal_nfo';

const UpdateProfile = () => {
    return (
        <UserLayout>
            <h1>Profile</h1>
            <UpdatePersonalNfo/>
        </UserLayout>
    );
};

export default UpdateProfile;