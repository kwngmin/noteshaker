import { client } from './sanity';

export async function getAllNotes(username: string) {
  const simplePostProjection = `
    ...,
    "username":author->username,
    "likes":count(likes),
    "notetitle":notetitle,
    "notebody":notebody,
    "comments":comments,
    "comment":comments[0],
    "id":_id,
    "createdAt":_createdAt
    `;
  return client.fetch(`
    *[_type =="note"] | order(_createdAt desc){${simplePostProjection}}
    `);
}
// *[_type =="note" && author->username =="${username}" || author._ref in *[_type =="user" && username == "${username}"].following[].ref] | order(_createdAt desc){${simplePostProjection}}
// "likes":likes[]->username,
// "comments":count(comments),
