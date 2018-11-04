const CALENDAR_ID =  "375d04259f4s12mua15dn7t96c%40group.calendar.google.com"
const API_KEY = "AIzaSyD9QB1T52MMJI-ztQaxficUfYa1c2O0uYg"

export async function getEvents (callback) {
  let today = new Date();
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&showDeleted=false`
  return fetch(url)
    .then(res => {
      return res.json()
    })
    .then(json => {
      let events = [];
      json.items.forEach(event => {
        if (String(event.status) === "cancelled") return;
        let start = new Date(event.start.dateTime);
        if (start.getTime() >= today.getTime()) {
          return getEventResource(event.id)
            .then(resource => {
              events.push(resource)
              return
            });
        }
      })
      callback(events)
    })
    .catch(error => {
      console.error(error);
    })
}

async function getEventResource (eventId) {
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${eventId}?key=${API_KEY}`
  return fetch(url)
    .then(res => {
      return res.json()
    })
    .then(json => {
      return json
    })
    .catch(error => {
      console.error(error);
    })
}