import React from 'react';
import { List, Heading, Box } from 'native-base';

export default function () {
  return (
    <Box w="80%">
      <Heading fontSize={24}>Topics (Plain List)</Heading>
      <List my={2}>
        <List.Item>Education</List.Item>
        <List.Item>Health</List.Item>
        <List.Item>Office</List.Item>
        <List.Item>Sports</List.Item>
      </List>
    </Box>
  );
}
