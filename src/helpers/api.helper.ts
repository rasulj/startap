export const errorCatch = (error: unknown): string => {
	if (typeof error === 'object' && error !== null) {
	  // @ts-ignore
	  if (error.response && error.response.data) {
		// @ts-ignore
		if (typeof error.response.data.message === 'object') {
		  // @ts-ignore
		  return error.response.data.message[0];
		}
		// @ts-ignore
		return error.response.data.message;
	  }
	  // @ts-ignore
	  if ('message' in error && typeof error.message === 'string') {
		// @ts-ignore
		return error.message;
	  }
	}
	return 'Unknown error';
  };