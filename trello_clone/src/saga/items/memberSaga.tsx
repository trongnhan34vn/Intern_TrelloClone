import { PayloadAction } from "@reduxjs/toolkit";
import { call } from "redux-saga/effects";
import { CREATE_MEMBER } from "../../api/services/memberServices";
import { MemberForm } from "../../types/Member.type";

export const createMember = function* ({payload}: PayloadAction<MemberForm>) {
  try {
    yield call(CREATE_MEMBER, payload);
  } catch (error) {
    
  }
}