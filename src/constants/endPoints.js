export const getAutoSuggestURLDetails = (domain, query) => {
    return {
        url : `https://${domain}/rest/api/3/issue/picker?query=${query}`,
        header: {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
    }
}
export const getWorkLogPostURL = (domain, issue) => {
    return `https://${domain}/rest/api/3/issue/${issue}/worklog`
}