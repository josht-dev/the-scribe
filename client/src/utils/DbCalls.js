import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { QUERY_USER_CAMPAIGNS } from './queries';
import Auth from './auth';

export default function GetCampaignData() {
  
 // Query the DB for the user's campaigns
 const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
  variables: { profileId: Auth.getProfile().data.profile }
})
console.log(loading);

if (loading) {
  <>loading</>
}



return data;

}