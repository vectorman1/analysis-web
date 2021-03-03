import { Observable } from 'rxjs';
import { isNullOrUndefined } from '@app/root/utils';
import { filter, map, startWith } from 'rxjs/operators';
import { ServerItem, ServerItemBase } from '@app/root/models/server-item.model';
import { PagedList } from '@app/root/models/paged-list';

export function safeMap<T, U>(
	project: (value: T) => U
): (source$: Observable<T>) => Observable<U> {
	return function (source$: Observable<T>): Observable<U> {
		return source$.pipe(
			filter((x) => !isNullOrUndefined(x)),
			map(project)
		);
	};
}

export function mapValue<T>(source$: Observable<ServerItem<T>>): Observable<T> {
	return source$.pipe(safeMap((x) => x.value));
}
export function mapIsLoading(
	source$: Observable<ServerItemBase>
): Observable<boolean> {
	return source$.pipe(
		safeMap((x) => x.isLoading),
		startWith(false)
	);
}
export const mapIsSuccess = safeMap<ServerItemBase, boolean>(
	(x) => x.isSuccess
);
export const mapSendValue = safeMap<ServerItemBase, any>((x) => x.sendValue);
export const mapLength = safeMap<any[], number>((x) => x.length);
export const mapTotalItems = safeMap<PagedList<any>, number>(
	(x) => x.totalItems
);
export function mapPageItems<T>(
	source$: Observable<PagedList<T>>
): Observable<T[]> {
	return source$.pipe(safeMap((x) => x.items));
}
