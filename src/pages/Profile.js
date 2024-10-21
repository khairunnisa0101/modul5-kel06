import React, { useState, useEffect } from 'react';
import './Profile.css';

// Komponen untuk menampilkan informasi profil GitHub
function ProfileCard({ username }) {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Mengambil data dari API GitHub ketika komponen dimount
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setProfileData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching GitHub profile:', error);
                setLoading(false);
            });
    }, [username]);

    return (
        <div className="profile-card">
            {loading ? (
                <p>Loading...</p>
            ) : profileData ? (
                <>
                    <img
                        src={profileData.avatar_url || "https://via.placeholder.com/150"}
                        alt={`${profileData.name || 'Profile'}'s Picture`}
                        className="profile-image"
                    />
                    <h1 className="profile-header">{profileData.name || "No Name Provided"}</h1>
                    <div className="profile-info">
                        <p><strong>Username:</strong> {profileData.login}</p>
                        <p><strong>Followers:</strong> {profileData.followers || 0}</p>
                        <a
                            href={profileData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-link"
                        >
                            Visit GitHub Profile
                        </a>
                    </div>
                </>
            ) : (
                <p className="error-message">Profile not found</p>
            )}
        </div>
    );
}

// Komponen utama untuk menampilkan 4 profil GitHub
export default function Profile() {
    const usernames = ["khairunnisa0101", "Femil0", "rakaeldian", "cat5a"];

    return (
        <div className="profile-container">
            {usernames.map((username) => (
                <ProfileCard key={username} username={username} />
            ))}
        </div>
    );
}