import React from 'react'
import { Flex, Avatar, IconButton} from "@chakra-ui/react";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaBell } from 'react-icons/fa';
import profileImage from '../../../img/profileImage.svg';

function Profile({...props}) {
    return (
          <Flex {...props} align="center">
           <ColorModeSwitcher/>
            <IconButton
             size="sm"
             color="gray.500"
             cursor="pointer"
             fontSize="md"
             aria-label={`notifications`}
             variant="ghost"
             icon={<FaBell />}/>

            <Avatar
              ml="2"
              size="sm"
              name="anubra266"
              src={profileImage}
              cursor="pointer"
            />
          </Flex>
    )
}

export default Profile
