import Activity from "../model/Activity";

export function getActivity(options = {}): Promise<Activity> {
    return fetch("https://www.boredapi.com/api/activity", options)
        .then(res => res.json())
        .then(activity => {
            // note this is very weak validation
            if (!activity || typeof activity !== 'object') {
                throw new Error('Invalid response');
            }
            return activity;
        })
}