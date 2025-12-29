import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [showDeclined, setShowDeclined] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    setIsVerified(verified === 'true');
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age_verified', 'true');
    setIsVerified(true);
  };

  const handleDecline = () => {
    setShowDeclined(true);
  };

  if (isVerified === null) return null;
  if (isVerified) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          className="glass-card p-8 md:p-12 max-w-lg mx-4 text-center"
        >
          {!showDeclined ? (
            <>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-4xl">🥃</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-4">
                  Age Verification
                </h2>
                <p className="text-muted-foreground text-lg">
                  You must be of legal drinking age to enter this site.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-foreground font-medium text-xl mb-6">
                  Are you 21 years or older?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleVerify}
                    className="px-8 py-6 text-lg"
                    variant="gold"
                  >
                    Yes, I'm 21+
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="px-8 py-6 text-lg"
                  >
                    No, I'm Under 21
                  </Button>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-sm text-muted-foreground"
              >
                We do not sell alcohol online. Contact us for enquiries only.
              </motion.p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <AlertTriangle className="w-16 h-16 mx-auto text-primary mb-6" />
              <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                Access Denied
              </h2>
              <p className="text-muted-foreground">
                You must be of legal drinking age to access this website.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgeVerification;
