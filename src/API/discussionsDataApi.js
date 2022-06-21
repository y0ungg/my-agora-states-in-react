//기존 글 작성 예정
import React from "react";
import { useEffect } from "react";
import fetch from 'node-fetch';

export function getDiscussions(filterBy = {}) {
    return fetch(`http://localhost:3001`)
    .then(resp => resp.json())
}