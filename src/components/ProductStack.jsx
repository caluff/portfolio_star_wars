/* eslint-disable react-refresh/only-export-components */
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {integrations} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const IntegrationCard = ({integration, index}) => (
  <motion.article
    variants={fadeIn('up', 'spring', index * 0.12, 0.75)}
    className="group relative overflow-hidden rounded-2xl border border-[#FAD64C]/20 bg-black-100/70 p-5 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-[#FAD64C]/60"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FAD64C] to-transparent opacity-60"/>
    <p className="text-[12px] uppercase tracking-[0.28em] text-[#FAD64C]/80">
      {integration.category}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {integration.tools.map((tool) => (
        <span
          key={tool}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[13px] font-semibold text-white transition duration-300 group-hover:border-[#FAD64C]/40"
        >
          {tool}
        </span>
      ))}
    </div>
    <p className="mt-3 text-[14px] leading-6 text-secondary">
      {integration.description}
    </p>
  </motion.article>
);

IntegrationCard.propTypes = {
  integration: PropTypes.shape({
    category: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ProductStack = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Integrations I work with</p>
        <h2 className={styles.sectionHeadText}>Product Stack</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I connect front-end products with the infrastructure behind real business
        workflows: secure payments, CMS operations, authentication, data layers,
        and automated cloud delivery.
      </motion.p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={integration.category}
            integration={integration}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProductStack, '');
