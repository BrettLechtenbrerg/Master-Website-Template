'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, MapPin, Phone, Globe, Filter, Grid, List, Mail, Star } from 'lucide-react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import FadeIn from '@/components/animations/FadeIn';

// Business type definition
interface Business {
  id: number;
  name: string;
  category: string;
  address: string;
  phone?: string;
  website?: string;
  email?: string;
  image?: string;
  tier: 'sponsor' | 'ambassador' | 'member';
}

// Actual business data from Murray Chamber directory
const businesses: Business[] = [
  // SPONSORS (Featured Members)
  { id: 1, name: 'AAA Restoration & Carpet Cleaning', category: 'Cleaning Services', address: 'PO BOX 57488, Salt Lake City, UT 84157', phone: '(801) 263-9990', website: 'aaarestorationutah.com', image: '/images/directory/aaa-restoration.jpg', tier: 'sponsor' },
  { id: 2, name: 'Indie Square', category: 'Coworking/Nonprofit Support', address: '141 5600 South #300, Murray, UT 84107', phone: '(801) 613-7150', website: 'indiesquare.org', image: '/images/directory/indie-square.jpg', tier: 'sponsor' },
  { id: 3, name: 'Utah Power Credit Union', category: 'Financial Services', address: '957 East 6600 South, Salt Lake City, UT 84121', phone: '(801) 708-8908', website: 'utahpowercu.org', image: '/images/directory/utah-power-cu.jpg', tier: 'sponsor' },
  { id: 4, name: 'Walston Advisory Firm', category: 'Financial Advisory', address: '650 E 4500 S, Ste 340, Murray, UT 84107', phone: '(801) 263-0400', website: 'walstonadvisoryfirm.com', image: '/images/directory/walston.jpg', tier: 'sponsor' },
  { id: 5, name: 'Abbington at Murray', category: 'Senior Living', address: '5377 S States Street, Murray, UT 84107', phone: '(385) 289-3700', website: 'abbingtonmurray.com', image: '/images/directory/abbington.jpg', tier: 'sponsor' },
  { id: 6, name: 'Intermountain Health', category: 'Healthcare', address: '5121 Cottonwood Street, Murray, UT 84107', phone: '(801) 507-7919', website: 'intermountainhealthcare.org', image: '/images/directory/intermountain.jpg', tier: 'sponsor' },
  { id: 7, name: 'Murray City', category: 'Government', address: '10 East 4800 South, Murray, UT 84107', phone: '(801) 270-2429', website: 'murray.utah.gov', image: '/images/directory/murray-city.jpg', tier: 'sponsor' },
  { id: 8, name: 'Comcast', category: 'Telecommunications', address: '9602 S 300 W, Sandy, UT 84070', phone: '(801) 608-7356', website: 'utah.comcast.com', image: '/images/directory/comcast.jpg', tier: 'sponsor' },
  { id: 9, name: 'Van Boerum & Frank Associates', category: 'Professional Services', address: '181 E 5600 South, Suite 200, Murray, UT 84107', phone: '(801) 530-3148', website: 'vbfa.com', image: '/images/directory/vbfa.jpg', tier: 'sponsor' },
  { id: 10, name: 'FinWise Bank', category: 'Banking', address: '756 E Winchester, Suite 100, Murray, UT 84107', phone: '(801) 545-6000', website: 'finwisebank.com', image: '/images/directory/finwise.jpg', tier: 'sponsor' },

  // AMBASSADORS
  { id: 11, name: 'Hometown Values', category: 'Local Marketing/Magazine', address: '3283 Jordan Line Parkway, West Jordan, UT 84088', phone: '(801) 390-8550', website: 'hometownvalues.net', image: '/images/directory/hometown-values.jpg', tier: 'ambassador' },
  { id: 12, name: 'Coach Kathy White', category: 'Life Coaching', address: '5747 South 665 West, Murray, UT 84123', phone: '(801) 680-5877', website: 'coachkathywhite.com', image: '/images/directory/coach-kathy.jpg', tier: 'ambassador' },
  { id: 13, name: 'Murray Youth Community Council', category: 'Youth Development', address: '141 E 5600 S Suite 315, Murray, UT 84107', phone: '(801) 808-0830', image: '/images/directory/mycc.jpg', tier: 'ambassador' },
  { id: 14, name: 'Beyond Creation Institute', category: 'Personal Development', address: '4764 S 900 E, STE 1, Murray, UT 84117', phone: '(801) 674-7329', website: 'BeyondCreationInstitute.com', image: '/images/directory/beyond-creation.jpg', tier: 'ambassador' },
  { id: 15, name: 'Roe and Associates/PFS', category: 'Financial Services', address: '301 E 6240 S, Murray, UT 84107', phone: '(801) 634-5356', website: 'livemore.net', image: '/images/directory/roe-associates.jpg', tier: 'ambassador' },
  { id: 16, name: 'Park City Toffee', category: 'Confectionery', address: '1920 Canyons Resort Drive, Park City, UT 84098', phone: '(435) 200-3493', website: 'parkcitytoffee.com', image: '/images/directory/park-city-toffee.jpg', tier: 'ambassador' },
  { id: 17, name: 'Murray Children\'s Pantry', category: 'Nonprofit/Food Bank', address: '170 East 5770 South, Murray, UT 84107', phone: '(385) 743-8808', website: 'murraychildrenspantry.org', image: '/images/directory/childrens-pantry.jpg', tier: 'ambassador' },
  { id: 18, name: 'Total Success Business Solutions', category: 'Business Coaching', address: '8663 Highland Dr., Sandy, UT 84093', phone: '(801) 718-3851', website: 'totalsuccessbusinesssolutions.com', image: '/images/directory/total-success.jpg', tier: 'ambassador' },
  { id: 19, name: 'LegalShield', category: 'Legal Services', address: '97 E Wicker Ln, Bountiful, UT 84010', phone: '(801) 205-5132', website: 'MrGeorgeWilkinson.com', tier: 'ambassador' },
  { id: 20, name: 'Murray Partners 4 Prevention', category: 'Community Prevention', address: '141 E 5600 S Suite 315, Murray, UT 84107', phone: '(801) 808-0830', website: 'murrayp4p.com', image: '/images/directory/p4p.jpg', tier: 'ambassador' },
  { id: 21, name: 'Dwight Christie Consulting', category: 'Financial Consulting', address: '141 East 5600 South, Suite 315, Murray, UT 84107', phone: '(801) 592-4878', website: 'dwightchristie.com', image: '/images/directory/dwight-christie.jpg', tier: 'ambassador' },
  { id: 22, name: 'WaFd Bank', category: 'Banking', address: '405 S Main St STE 100, Salt Lake City, UT 84111', phone: '(801) 366-2244', website: 'wafdbank.com', image: '/images/directory/wafd-bank.jpg', tier: 'ambassador' },
  { id: 23, name: 'PostNet UT115', category: 'Printing/Design', address: '3556 S 5600 W, West Valley City, UT 84120', phone: '(801) 965-9814', website: 'locations.postnet.com', image: '/images/directory/postnet.jpg', tier: 'ambassador' },
  { id: 24, name: 'Primerica Financial Services', category: 'Insurance/Financial', address: '1042 W Park Reserve Way, Midvale, UT 84047', phone: '(812) 240-6487', website: 'primerica.com', image: '/images/directory/primerica.jpg', tier: 'ambassador' },

  // MEMBERS
  { id: 25, name: 'AAA Flooring, Inc.', category: 'Flooring', address: '249 West 4860 South, Murray, UT 84107', phone: '(801) 263-9990', website: 'aaarestorationutah.com', image: '/images/directory/aaa-flooring.jpg', tier: 'member' },
  { id: 26, name: 'Advanced Spine & Disc', category: 'Healthcare', address: '5250 So. Commerce Drive, #155, Murray, UT 84107', phone: '(801) 747-7776', tier: 'member' },
  { id: 27, name: 'Any Lab Test Now', category: 'Testing Services', address: '5616 S 900 E, Murray, UT 84121', phone: '(801) 305-4689', website: 'anylabtestnow.com', tier: 'member' },
  { id: 28, name: 'Aries Global Logistics', category: 'Logistics', address: '9875 S. 500 W., South Jordan, UT 84070', phone: '(801) 428-8370', website: 'ariesgl.com', tier: 'member' },
  { id: 29, name: 'Avallon Music', category: 'Music Studio/Education', address: '4991 S. Commerce Drive, Murray, UT 84107', phone: '(801) 664-9335', website: 'avallonmusic.com', image: '/images/directory/avallon-music.jpg', tier: 'member' },
  { id: 30, name: 'Bedrock Quartz Counter Tops', category: 'Home Improvement', address: '1276 Vine St., Murray, UT 84107', tier: 'member' },
  { id: 31, name: 'Big Brothers Big Sisters', category: 'Youth Mentoring', address: '2121 S. State St, SLC, UT 84106', phone: '(801) 313-0303', website: 'bbbsu.org', image: '/images/directory/bbbs.jpg', tier: 'member' },
  { id: 32, name: 'Biznis Resource', category: 'Business Consulting', address: '11017 S. Rodnia Circle, Sandy, UT 84092', phone: '(385) 528-8584', website: 'BiznisResource.com', image: '/images/directory/biznis-resource.jpg', tier: 'member' },
  { id: 33, name: 'Boys and Girls Club of Greater Salt Lake', category: 'Youth Services', address: '244 E Myrtle Ave, Murray, UT 84107', phone: '(801) 261-6181', website: 'gslclubs.org', image: '/images/directory/boys-girls-club.jpg', tier: 'member' },
  { id: 34, name: 'Brodsky Built', category: 'Real Estate Development', address: '84 West 4800 South, Ste 300, Murray, UT 84107', phone: '(801) 506-9611', website: 'brodskybuiltutah.com', image: '/images/directory/brodsky-built.jpg', tier: 'member' },
  { id: 35, name: 'btone FITNESS Brickyard', category: 'Fitness', address: '425 West 200 North, Unit 461, Millcreek, UT 84103', phone: '(857) 445-1250', website: 'btonefitness.com', image: '/images/directory/btone.jpg', tier: 'member' },
  { id: 36, name: 'Chimichurri Grill', category: 'Food Truck', address: '4318 South 4665 West, West Valley City, UT 84120', phone: '(801) 699-5497', website: 'thechimichurrigrill.com', image: '/images/directory/chimichurri.jpg', tier: 'member' },
  { id: 37, name: 'Clinical Innovations', category: 'Healthcare', address: '747 West 4170 South, Murray, UT 84123', phone: '(801) 268-8200', tier: 'member' },
  { id: 38, name: 'Copa Health', category: 'Healthcare', address: '5323 S. Woodrow Street, Suite 200, Murray, UT 84107', phone: '(385) 318-3200', website: 'copahealth.org', image: '/images/directory/copa-health.jpg', tier: 'member' },
  { id: 39, name: 'Creative Learning Academy', category: 'Education', address: '5979 Fashion Blvd, Murray, UT 84107', phone: '(801) 550-1063', website: 'clautah.net', image: '/images/directory/creative-learning.jpg', tier: 'member' },
  { id: 40, name: 'Devenir Supports', category: 'Support Services', address: '5296 s. Commerce Dr. Suite 102, Murray, UT 84107', phone: '(385) 206-9871', website: 'devenirsupports.com', image: '/images/directory/devenir.jpg', tier: 'member' },
  { id: 41, name: 'D. L. Evans Bank', category: 'Banking', address: '156 E WINCHESTER ST, Murray, UT 84107', phone: '(801) 414-2452', website: 'dlevans.com', image: '/images/directory/dl-evans.jpg', tier: 'member' },
  { id: 42, name: 'Elevated Consultants LLC', category: 'AI Consulting', address: '1914 S 1300 E, Salt Lake City, UT 84105', phone: '(385) 371-8083', website: 'elevatedconsultantsllc.com', image: '/images/directory/elevated-consultants.jpg', tier: 'member' },
  { id: 43, name: 'Elevated Mountain Guides', category: 'Outdoor Services', address: '369 E 900 S, #144, Salt Lake City, UT 84111', phone: '(801) 400-2542', website: 'elevatedmountainguides.org', tier: 'member' },
  { id: 44, name: 'Fashion Place Mall', category: 'Shopping Center', address: '6191 So. State, #201, Murray, UT 84107', phone: '(801) 290-1407', tier: 'member' },
  { id: 45, name: 'Fiscal Fusion Accounting', category: 'Accounting', address: '6876 S 90 E Apt A, Midvale, UT 84047', phone: '(801) 200-3766', website: 'fiscalfusionaccounting.com', image: '/images/directory/fiscal-fusion.jpg', tier: 'member' },
  { id: 46, name: 'FMK Foundation, The', category: 'Nonprofit', address: '5411 S Vine Street, Suite 3B, Murray, UT 84107', phone: '(801) 641-1571', website: 'thegivebackbrokerage.com', tier: 'member' },
  { id: 47, name: 'Gateway Title Insurance Agency, LLC', category: 'Title Services', address: '434 West Ascension Way, STE 125, Murray, UT 84123', phone: '(801) 495-2381', website: 'gatewaytitleutah.com', image: '/images/directory/gateway-title.jpg', tier: 'member' },
  { id: 48, name: 'Gibson\'s Pharmacy', category: 'Pharmacy', address: '240 East Winchester, Murray, UT 84107', phone: '(801) 262-5526', website: 'gibsonspharmacyrx.com', image: '/images/directory/gibsons.jpg', tier: 'member' },
  { id: 49, name: 'Give Back & Connect', category: 'Networking/Business', address: '5411 S Vine St. #3, Murray, UT 84107', phone: '(801) 641-1571', website: 'givebackandconnect.com', image: '/images/directory/give-back-connect.jpg', tier: 'member' },
  { id: 50, name: 'Goldenwest Credit Union', category: 'Banking', address: '6007 S Fashion Blvd, Murray, UT 84107', phone: '(801) 302-4022', website: 'gwcu.org', image: '/images/directory/goldenwest.jpg', tier: 'member' },
  { id: 51, name: 'Gosdis Law', category: 'Legal Services', address: '5085 South State Street, Murray, UT 84107', phone: '(801) 200-1578', website: 'gosdislaw.com', tier: 'member' },
  { id: 52, name: 'Hamlet Homes', category: 'Real Estate Development', address: '84 W. 4800 S., Suite 200, Murray, UT 84107', phone: '(801) 842-5360', website: 'hamlethomes.com', tier: 'member' },
  { id: 53, name: 'Hammers Recycling', category: 'Recycling', address: '4232 South 500 West, Murray, UT 84123', phone: '(801) 577-1938', tier: 'member' },
  { id: 54, name: 'Happy House Cleaning', category: 'Cleaning Services', address: '9860 S. 700 E., Suite 15 A, Sandy, UT 84070', phone: '(801) 651-6682', website: 'happyhousecleaning.com', image: '/images/directory/happy-house.jpg', tier: 'member' },
  { id: 55, name: 'Happy Tummie', category: 'Food Truck', address: '231 W 4500 S, Murray, UT 84116', phone: '(801) 688-6553', website: 'happytummie.com', image: '/images/directory/happy-tummie.jpg', tier: 'member' },
  { id: 56, name: 'Holiday Inn Express & Suites Murray', category: 'Hotel', address: '5429 South Commerce Dr., Murray, UT 84107', phone: '(801) 266-0800', tier: 'member' },
  { id: 57, name: 'HomeWell Care Services', category: 'Home Care', address: '5411 S. Vine St, Unit 2B, Murray, UT 84107', phone: '(801) 572-2030', website: 'homewellcares.com', tier: 'member' },
  { id: 58, name: 'Intellipop', category: 'Internet Service Provider', address: '673 S Innovation Cir, B4, Payson, UT 84651', phone: '(801) 300-7788', website: 'intellipop.com', tier: 'member' },
  { id: 59, name: 'Inwest Title Services', category: 'Title Services', address: '1100 E 6600 S, Suite 120, Murray, UT 84107', phone: '(801) 264-0700', website: 'inwesttitle.com', image: '/images/directory/inwest-title.jpg', tier: 'member' },
  { id: 60, name: 'Jamba', category: 'Smoothies/Juice Bar', address: '5590 South Van Winkle Exp., Murray, UT 84117', phone: '(925) 455-4743', website: 'jamba.com', image: '/images/directory/jamba.jpg', tier: 'member' },
  { id: 61, name: 'JC Pro Design', category: 'Design Services', address: '6186 S 300 W, Murray, UT 84107', phone: '(801) 557-5066', website: 'jcprodesign.com', image: '/images/directory/jc-pro-design.jpg', tier: 'member' },
  { id: 62, name: 'Justice By Objectives', category: 'Nonprofit/Criminal Justice', address: '141 East 5600 South, Ste 300, #302, Murray, UT 84107', phone: '(435) 565-5229', website: 'justice-by-objectives.org', image: '/images/directory/justice-by-objectives.jpg', tier: 'member' },
  { id: 63, name: 'Knotted Beauty', category: 'Massage/Esthetics', address: '4885 S 900 E Suite 211, Murray, UT 84094', phone: '(219) 765-1847', website: 'knottedbeauty.com', image: '/images/directory/knotted-beauty.jpg', tier: 'member' },
  { id: 64, name: 'K Real Estate Utah', category: 'Real Estate', address: '5411 S. Vine St, #3, 4, Murray, UT 84107', phone: '(801) 641-1571', website: 'thegivebackbrokerage.com', image: '/images/directory/k-real-estate.jpg', tier: 'member' },
  { id: 65, name: 'Larry H. Miller Chevrolet', category: 'Auto Dealership', address: '5500 South State Street, Murray, UT 84107', phone: '(801) 264-3200', tier: 'member' },
  { id: 66, name: 'Les Schwab', category: 'Tire Shop', address: '4355 South State Street, Murray, UT 84107', phone: '(801) 288-0660', website: 'lesschwab.com', tier: 'member' },
  { id: 67, name: 'Loan Factory', category: 'Real Estate Services', address: 'Transaction Coordination Services', phone: '(801) 792-1257', website: 'yourtcpartner.com', image: '/images/directory/loan-factory.jpg', tier: 'member' },
  { id: 68, name: 'MaestroHQ.com', category: 'Business Services', address: '5411 S. Vine #3, Murray, UT 84107', phone: '(801) 243-4750', website: 'MaestroHQ.com', image: '/images/directory/maestro-hq.jpg', tier: 'member' },
  { id: 69, name: 'Make a Wish Foundation of Utah', category: 'Nonprofit', address: '771 East Winchester, Murray, UT 84107', phone: '(801) 305-1930', website: 'utah.wish.org', tier: 'member' },
  { id: 70, name: 'Master Wireless, LLC (AT&T)', category: 'Telecommunications', address: '5692 S 900 E, Suite 10, Murray, UT 84121', phone: '(385) 250-4439', website: 'masterwirelessmi.com', image: '/images/directory/master-wireless.jpg', tier: 'member' },
  { id: 71, name: 'MaxLiving Chiropractic Wasatch Front', category: 'Chiropractic', address: '5444 S 900 E, Murray, UT 84117', phone: '(720) 335-9848', website: 'maxlivingwasatchfront.com', image: '/images/directory/maxliving.jpg', tier: 'member' },
  { id: 72, name: 'Memorial Mortuaries', category: 'Funeral Services', address: '5850 South 900 East, Murray, UT 84107', phone: '(801) 262-4631', website: 'memorialutah.com', tier: 'member' },
  { id: 73, name: 'Mike Hale Acura', category: 'Auto Dealership', address: '5601 South State, Murray, UT 84107', phone: '(801) 263-0202', website: 'mikehale.com', tier: 'member' },
  { id: 74, name: 'MK Consulting', category: 'Digital Marketing', address: '1831 Hidden Meadows Drive, Suite 1e, Holladay, UT 84117', phone: '(385) 212-0066', website: 'mkconsultingslc.com', image: '/images/directory/mk-consulting.jpg', tier: 'member' },
  { id: 75, name: 'Mobility Prosthetics', category: 'Medical Devices', address: '480 East Winchester Street Suite 275, Murray, UT 84107', phone: '(801) 997-1367', tier: 'member' },
  { id: 76, name: 'Mountain West Commercial Driving School', category: 'Education', address: '4700 S 900 E #8, Murray, UT 84117', phone: '(801) 698-7978', website: 'mountainwestcdl.com', image: '/images/directory/mountain-west-cdl.jpg', tier: 'member' },
  { id: 77, name: 'Mount Liberty College', category: 'Education', address: '5288 S. Commerce Drive, Suite B-218, Murray, UT 84107', phone: '(801) 997-0197', website: 'johnadamscollege.org', image: '/images/directory/mount-liberty.jpg', tier: 'member' },
  { id: 78, name: 'Murray City Council', category: 'Government', address: '10 East 4800 South, Murray, UT 84107', phone: '(801) 264-2603', website: 'murray.utah.gov', image: '/images/directory/murray-council.jpg', tier: 'member' },
  { id: 79, name: 'Murray Education Foundation', category: 'Nonprofit/Education', address: '5102 Commerce Drive, Building 1, Murray, UT 84107', phone: '(385) 347-6299', website: 'murrayeducationfoundation.org', image: '/images/directory/murray-ed-foundation.jpg', tier: 'member' },
  { id: 80, name: 'Murray Parkway Golf Course', category: 'Golf', address: '6345 Murray Parkway Ave., Murray, UT 84123', phone: '(801) 262-4653', website: 'parkwaygolf.org', image: '/images/directory/murray-parkway.jpg', tier: 'member' },
  { id: 81, name: 'Murray School District', category: 'Education', address: '5440 S. State Street, Murray, UT 84107', phone: '(801) 288-1131', website: 'murrayschools.org', image: '/images/directory/murray-schools.jpg', tier: 'member' },
  { id: 82, name: 'Neighbors of Murray City', category: 'Magazine/Community', address: '5562 S. Edgeberry Dr, Murray, UT 84123', phone: '(801) 520-3342', image: '/images/directory/neighbors-murray.jpg', tier: 'member' },
  { id: 83, name: 'NeighborWorks Salt Lake', category: 'Nonprofit/Housing', address: '4843 Poplar Street, Murray, UT 84107', phone: '(801) 539-1590', website: 'nwsaltlake.org', tier: 'member' },
  { id: 84, name: 'The Other Side Academy', category: 'Education', address: '667 E 100 S, Salt Lake City, UT 84102', phone: '(801) 506-1655', tier: 'member' },
  { id: 85, name: 'Pentalon Construction', category: 'Construction', address: '4376 South 700 East Suite 100, Murray, UT 84107', phone: '(801) 871-0342', website: 'pentalonconstruction.com', image: '/images/directory/pentalon.jpg', tier: 'member' },
  { id: 86, name: 'P.F. Chang\'s', category: 'Restaurant', address: '6227 South State Street, Murray, UT 84107', phone: '(385) 474-0033', website: 'pfchangs.com', image: '/images/directory/pf-changs.jpg', tier: 'member' },
  { id: 87, name: 'Playworks Utah', category: 'Youth Organization', address: '141 5600 S #304, Murray, UT 84041', phone: '(385) 394-1701', website: 'playworks.org', image: '/images/directory/playworks.jpg', tier: 'member' },
  { id: 88, name: 'Pratt and LeFevre Corporation', category: 'Professional Services', address: '450 Simmons Way, Suite 760, Kaysville, UT 84037', phone: '(801) 772-8848', website: 'prattandlefevre.com', tier: 'member' },
  { id: 89, name: 'Project Rainbow Utah', category: 'Nonprofit/LGBTQ+', address: '141 East 5600 South #305, Murray, UT 84107', phone: '(801) 518-1390', website: 'projectrainbowutah.org', image: '/images/directory/project-rainbow.jpg', tier: 'member' },
  { id: 90, name: 'Project Read', category: 'Nonprofit/Literacy', address: '141 East 5600 South #312, Murray, UT 84107', phone: '(801) 310-6654', website: 'projectreadutah.org', image: '/images/directory/project-read.jpg', tier: 'member' },
  { id: 91, name: 'Quan Ngo - Insurance Agent', category: 'Insurance', address: '3461 S State Street Suite 1D, South Salt Lake, UT 84107', phone: '(801) 209-2158', website: 'Medicareadvocates.com', image: '/images/directory/quan-ngo.jpg', tier: 'member' },
  { id: 92, name: 'Reborn Pelvic Health & Wellness', category: 'Healthcare', address: '6040 S Fashion Blvd, Suite #101, Murray, UT 84107', phone: '(801) 702-8475', website: 'rebornphw.com', image: '/images/directory/reborn-pelvic.jpg', tier: 'member' },
  { id: 93, name: 'Remedy Tattoo Parlor', category: 'Tattoo Shop', address: '6618 S State Street, Murray, UT 84107', phone: '(801) 266-3201', website: 'remedytattooparlor.com', image: '/images/directory/remedy-tattoo.jpg', tier: 'member' },
  { id: 94, name: 'Rising Energy', category: 'Bodywork/Massage', address: '776 E. Ashton Ave., Salt Lake City, UT 84106', phone: '(385) 549-4156', image: '/images/directory/rising-energy.jpg', tier: 'member' },
  { id: 95, name: 'Seagull Printing', category: 'Printing', address: '6969 High Tech Drive, Midvale, UT 84047', phone: '(801) 810-5557', website: 'seagullprinting.com', tier: 'member' },
  { id: 96, name: 'SelectHealth', category: 'Insurance/Healthcare', address: '5381 Green Street, Murray, UT 84123', phone: '(801) 442-7955', website: 'selecthealth.org', tier: 'member' },
  { id: 97, name: 'Shiny Shell Carwash', category: 'Car Wash', address: '3135 S Richmond Street, Salt Lake City, UT 84106', phone: '(310) 982-4708', website: 'shinyshell.com', image: '/images/directory/shiny-shell.jpg', tier: 'member' },
  { id: 98, name: 'Silver Key Benefits', category: 'Insurance', address: '3780 S West Temple Dr #101, Salt Lake City, UT 84115', phone: '(801) 889-2771', website: 'silverkeybenefits.com', image: '/images/directory/silver-key.jpg', tier: 'member' },
  { id: 99, name: 'Sol and Sabor', category: 'Mexican Restaurant', address: '4700 S. 900 E. Suit 25, Murray, UT 84107', phone: '(801) 833-1019', website: 'solandsabor.com', image: '/images/directory/sol-sabor.jpg', tier: 'member' },
  { id: 100, name: 'State Wide Insurance', category: 'Insurance', address: '1035 West Bellwood Lane, #160, Murray, UT 84123', phone: '(801) 506-5060', website: 'statewideslc.com', image: '/images/directory/statewide.jpg', tier: 'member' },
  { id: 101, name: 'Studio 56 Dance Center', category: 'Dance Studio', address: '170 W Winchester St, Murray, UT 84107', phone: '(801) 261-3182', website: 'studio56dance.com', image: '/images/directory/studio-56.jpg', tier: 'member' },
  { id: 102, name: 'Summit Technology', category: 'IT Services', address: '50 West Broadway, Salt Lake City, UT 84101', phone: '(801) 961-1183', website: 'greatservice.com', image: '/images/directory/summit-tech.jpg', tier: 'member' },
  { id: 103, name: 'Supernova Marketing LLC', category: 'Marketing', address: '578 W SAGE RIVER WAY, Murray, UT 84123', phone: '(760) 809-1965', website: 'supernovamrktg.com', image: '/images/directory/supernova.jpg', tier: 'member' },
  { id: 104, name: 'The Advocates', category: 'Legal Services', address: '737 E Winchester St, Salt Lake City, UT 84107', phone: '(801) 326-0809', website: 'utahadvocates.com', image: '/images/directory/advocates.jpg', tier: 'member' },
  { id: 105, name: 'The Alias Group', category: 'Professional Services', address: '211 Lake Dr, Suite J, Newark, DE 19702', phone: '(302) 563-6947', website: 'thealiasgroup.com', tier: 'member' },
  { id: 106, name: 'The Break Sports Grill', category: 'Restaurant/Bar', address: '4760 S 900 E, Murray, UT 84117', phone: '(801) 987-3354', website: 'Thebreakgrill.com', image: '/images/directory/the-break.jpg', tier: 'member' },
  { id: 107, name: 'The Royce on 9th', category: 'Apartment Complex', address: '853 E 4680 S, Murray, UT 84117', phone: '(385) 415-3991', website: 'liveattheroyce.com', tier: 'member' },
  { id: 108, name: 'Thumzup Media Corporation', category: 'Marketing/Technology', address: '11845 W. Olympic Blvd 1100W #13, Los Angeles, CA 90064', phone: '(310) 237-2887', website: 'thumzupmedia.com', image: '/images/directory/thumzup.jpg', tier: 'member' },
  { id: 109, name: 'Tuff Shed', category: 'Storage Buildings', address: '5501 South 320 West, Salt Lake City, UT 84107', phone: '(385) 378-2056', website: 'tuffshed.com', image: '/images/directory/tuff-shed.jpg', tier: 'member' },
  { id: 110, name: 'USA Ninja Challenge Murray', category: 'Fitness/Kids Activities', address: '4731 South Commerce Drive, Murray, UT 84107', phone: '(385) 425-3099', website: 'ninjamurray.com', image: '/images/directory/ninja-challenge.jpg', tier: 'member' },
  { id: 111, name: 'Utah Wealth Strategies', category: 'Financial Management', address: '1100 E 6600 S, Ste 420, Murray, UT 84121', phone: '(801) 365-1098', website: 'utahwealthstrategies.com', image: '/images/directory/utah-wealth.jpg', tier: 'member' },
  { id: 112, name: 'Visit Salt Lake', category: 'Tourism', address: '90 S West Temple, Salt Lake City, UT 84101', phone: '(801) 534-4900', website: 'visitsaltlake.com', tier: 'member' },
  { id: 113, name: 'WasteLess Solutions', category: 'Nonprofit/Food Waste', address: '141 East 5600 South, Suite 300, Murray, UT 84107', website: 'wastelesssolutions.org', image: '/images/directory/wasteless.jpg', tier: 'member' },
  { id: 114, name: 'Western Front Wealth Advisors', category: 'Financial Services', address: '488 E Winchester St, STE 400, Murray, UT 84107', website: 'adventurevanadvisor.com', image: '/images/directory/western-front.jpg', tier: 'member' },
  { id: 115, name: 'Wild Grace LLC', category: 'Wellness Center', address: '5282 S Commerce Drive, Murray, UT 84107', phone: '(801) 252-6202', website: 'wildgrace.be', image: '/images/directory/wild-grace.jpg', tier: 'member' },
  { id: 116, name: 'Wingers Restaurant & Alehouse', category: 'Restaurant/Bar', address: '4790 S. State St., Murray, UT 84107', phone: '(801) 685-8889', website: 'wingerbros.com', image: '/images/directory/wingers.jpg', tier: 'member' },
  { id: 117, name: 'Youthlinc', category: 'Youth Services', address: '1166 E Brickyard Rd, Salt Lake City, UT 84106', phone: '(801) 467-4417', website: 'youthlinc.org', tier: 'member' },
  { id: 118, name: 'ZenBusiness', category: 'Business Services', address: '5511 Parkcrest Drive, Suite 103, Austin, TX 78731', phone: '(844) 493-6249', website: 'zenbusiness.com', image: '/images/directory/zenbusiness.jpg', tier: 'member' },
];

// Get unique categories
const allCategories = ['All Categories', ...Array.from(new Set(businesses.map(b => b.category))).sort()];

// Tier display names and colors
const tierInfo = {
  sponsor: { label: 'Sponsor', color: 'from-orange-500 to-orange-600', textColor: 'text-orange-300', bgColor: 'bg-orange-500/20' },
  ambassador: { label: 'Ambassador', color: 'from-purple-500 to-purple-600', textColor: 'text-purple-300', bgColor: 'bg-purple-500/20' },
  member: { label: 'Member', color: 'from-slate-500 to-slate-600', textColor: 'text-white/70', bgColor: 'bg-white/10' },
};

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTier, setSelectedTier] = useState<'all' | 'sponsor' | 'ambassador' | 'member'>('all');

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || business.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || business.tier === selectedTier;
    return matchesSearch && matchesCategory && matchesTier;
  });

  // Sort: sponsors first, then ambassadors, then members
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    const tierOrder = { sponsor: 0, ambassador: 1, member: 2 };
    return tierOrder[a.tier] - tierOrder[b.tier];
  });

  return (
    <>
      <PageHeader
        badge="Business Resources"
        title="Member Directory"
        description="Connect with over 100 local businesses in the Murray area. Find partners, suppliers, and customers right in your community."
        breadcrumbs={[
          { label: 'Business Resources', href: '/resources' },
          { label: 'Member Directory' },
        ]}
      />

      <section className="relative py-16 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Search and Filters */}
          <FadeIn direction="up">
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search businesses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-glass pl-12 w-full"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input-glass select-glass pl-12 w-full lg:w-64"
                  >
                    {allCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-colors ${viewMode === 'grid' ? 'bg-purple-500/30 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-colors ${viewMode === 'list' ? 'bg-purple-500/30 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tier Filter */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(['all', 'sponsor', 'ambassador', 'member'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTier === tier
                        ? tier === 'all' ? 'bg-white/20 text-white' : `${tierInfo[tier as keyof typeof tierInfo]?.bgColor} ${tierInfo[tier as keyof typeof tierInfo]?.textColor}`
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {tier === 'all' ? 'All Members' : tierInfo[tier]?.label}
                    {tier !== 'all' && (
                      <span className="ml-2 text-xs">
                        ({businesses.filter(b => b.tier === tier).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Results Count */}
          <p className="text-white/60 mb-6">
            Showing {sortedBusinesses.length} of {businesses.length} businesses
          </p>

          {/* Business Grid/List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {sortedBusinesses.map((business) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                className={`glass-card overflow-hidden group ${viewMode === 'list' ? 'flex' : ''}`}
              >
                {/* Business Image - Only show if business has image */}
                {business.image && (
                  <div className={`relative ${viewMode === 'list' ? 'w-32 sm:w-48 shrink-0' : 'h-40'} overflow-hidden bg-gradient-to-br from-purple-600/20 to-orange-500/20`}>
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    {/* Tier Badge on Image */}
                    {business.tier !== 'member' && (
                      <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${tierInfo[business.tier].bgColor} ${tierInfo[business.tier].textColor} flex items-center gap-1`}>
                        <Star className="w-3 h-3" />
                        {tierInfo[business.tier].label}
                      </div>
                    )}
                  </div>
                )}

                <div className={`p-5 flex-1 ${!business.image && viewMode === 'grid' ? 'min-h-[200px]' : ''}`}>
                  {/* Tier Badge - Show if no image */}
                  {!business.image && business.tier !== 'member' && (
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${tierInfo[business.tier].bgColor} ${tierInfo[business.tier].textColor} mb-3`}>
                      <Star className="w-3 h-3" />
                      {tierInfo[business.tier].label}
                    </div>
                  )}

                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full mb-2">
                    {business.category}
                  </span>

                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {business.name}
                  </h3>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-start gap-2 text-sm text-white/50">
                      <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{business.address}</span>
                    </div>
                    {business.phone && (
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                        <a href={`tel:${business.phone}`} className="hover:text-white transition-colors">{business.phone}</a>
                      </div>
                    )}
                    {business.website && (
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Globe className="w-4 h-4 text-orange-400 shrink-0" />
                        <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors truncate">
                          {business.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedBusinesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No businesses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
