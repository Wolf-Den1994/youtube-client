import { ICard } from '../models/card.model';

export const filter = (val: string, list: ICard[]) => list.filter((i) => (~i.title.indexOf(val)));
