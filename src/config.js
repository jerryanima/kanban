const LIST_TYPES = {
	BACKLOG: 'backlog',
	READY: 'ready',
	IN_PROGRESS: 'inProgress',
	FINISHED: 'finished',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.FINISHED]: 'Finished',
}

const LIST_FILTER = {
	[LIST_TYPES.READY]: 'backlog',
	[LIST_TYPES.IN_PROGRESS]: 'ready',
	[LIST_TYPES.FINISHED]: 'inProgress',
} 

export { LIST_TYPES, LIST_COPY, LIST_FILTER }
