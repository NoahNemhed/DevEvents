import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import events from '@/lib/constants'




const Page = () => {
  return (
    <section>
      <h1 className="text-center">The hub for every dev <br /> Event you can't miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and conferences, all in one place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ol className="events">
              {events.map((event) => (
                <li key={event.title}>
                  <EventCard {...event} />
                </li>
              ))}
          </ol>
      </div>
      </section>
  )
}

export default Page