import classes from "./SummarySection.module.css";
const SummarySection = () => {
  return (
    <section className={classes.summary}>
      <h2>Coffee</h2>
      <p>
        We control every part of the fulfillment process, from roast to post.
        Every hand-packed bag is filled with the exceptional coffee you
        deserve..
      </p>
      <p>
        By trading directly with you online, we ensure orders travel straight
        from our roaster to your doorstep. That way, your coffee arrives as
        close to its roast date as possible.
      </p>
    </section>
  );
};
export default SummarySection;
