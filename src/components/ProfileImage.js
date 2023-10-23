import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';

function ProfileImage({ profile }) {
  return (
    <Row>
      <Col>
        {profile && profile.profile_img && (
          <Image
            src={profile.profile_img}
            alt={profile.name}
            style={{ maxHeight: "75px", maxWidth: "75px" }}
          />
        )}
      </Col>
      {/* <Col>{profile && profile.name && <p>{profile.name}</p>}</Col> */}
    </Row>
  );
}

export default ProfileImage
