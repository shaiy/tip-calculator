export const REMOVED_ITEM = 'REMOVED_ITEM';

export const removeItem = (uuid) => ({
  type: REMOVED_ITEM,
  payload: { uuid }
});
