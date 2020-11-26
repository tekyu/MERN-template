import { user } from "store/user/userSelectors";
import { getItemFromStorage } from "utils/localStorage";

export const CREATED_TEMPLATES = `createdTemplates`;
export const USER = `playwinuser`;
export const DRAFT_TEMPLATES = `draftTemplates`;
export const TEMPLATE_TYPE_LEAGUE = `league`;
export const TEMPLATE_TYPE_TOURNAMENT = `tournament`;
export const PLAYWIN_TEMPLATE_KEYS = `playwintemplatekeys`;

export const getUser = getItemFromStorage(USER) || {};

export const getUserId = () => {
  return user.id || null;
};

export const getCreatedTemplates = getItemFromStorage(CREATED_TEMPLATES) || [];

export const getDraftTemplates = getItemFromStorage(DRAFT_TEMPLATES) || {};

export const getDraftLeagues = () => {
  return Object.values(getDraftTemplates).filter(
    ({ type }) => type === TEMPLATE_TYPE_LEAGUE
  );
};

export const getDraftTournaments = () => {
  return Object.values(getDraftTemplates).filter(
    ({ type }) => type === TEMPLATE_TYPE_TOURNAMENT
  );
};
