import { createAction, props } from '@ngrx/store';
import { ICard } from '../../models/card.model';

export const toggleShowFilter = createAction('[FILTERS] toggle show filter');

export const showHeader = createAction('[HEADER] show header');
export const hideHeader = createAction('[HEADER] hide header');

export const createItem = createAction('[ADMIN] create item', props<{ item: ICard }>());
export const setSearchValue = createAction('[SEARCH] search value', props<{ word: string }>());
export const setSearchItems = createAction('[SEARCH] search items', props<{ items: ICard[] }>());

export const handleSortDate = createAction('[SORT] handle sort by date');
export const handleSortViews = createAction('[SORT] handle sort by views');
export const handleFilterWords = createAction('[FILTER] handle filter by words', props<{ word: string }>());
