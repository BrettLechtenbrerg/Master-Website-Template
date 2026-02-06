import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase variables (URL or SERVICE_ROLE_KEY)');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const businesses = [
    // SPONSORS (Featured Members)
    { name: 'AAA Restoration & Carpet Cleaning', category: 'Cleaning Services', address: 'PO BOX 57488, Salt Lake City, UT 84157', phone: '(801) 263-9990', website: 'aaarestorationutah.com', tier: 'sponsor' },
    { name: 'Indie Square', category: 'Coworking/Nonprofit Support', address: '141 5600 South #300, Murray, UT 84107', phone: '(801) 613-7150', website: 'indiesquare.org', tier: 'sponsor' },
    { name: 'Utah Power Credit Union', category: 'Financial Services', address: '957 East 6600 South, Salt Lake City, UT 84121', phone: '(801) 708-8908', website: 'utahpowercu.org', tier: 'sponsor' },
    { name: 'Walston Advisory Firm', category: 'Financial Advisory', address: '650 E 4500 S, Ste 340, Murray, UT 84107', phone: '(801) 263-0400', website: 'walstonadvisoryfirm.com', tier: 'sponsor' },
    { name: 'Abbington at Murray', category: 'Senior Living', address: '5377 S States Street, Murray, UT 84107', phone: '(385) 289-3700', website: 'abbingtonmurray.com', tier: 'sponsor' },
    { name: 'Intermountain Health', category: 'Healthcare', address: '5121 Cottonwood Street, Murray, UT 84107', phone: '(801) 507-7919', website: 'intermountainhealthcare.org', tier: 'sponsor' },
    { name: 'Murray City', category: 'Government', address: '10 East 4800 South, Murray, UT 84107', phone: '(801) 270-2429', website: 'murray.utah.gov', tier: 'sponsor' },
    { name: 'Comcast', category: 'Telecommunications', address: '9602 S 300 W, Sandy, UT 84070', phone: '(801) 608-7356', website: 'utah.comcast.com', tier: 'sponsor' },
    { name: 'Van Boerum & Frank Associates', category: 'Professional Services', address: '181 E 5600 South, Suite 200, Murray, UT 84107', phone: '(801) 530-3148', website: 'vbfa.com', tier: 'sponsor' },
    { name: 'FinWise Bank', category: 'Banking', address: '756 E Winchester, Suite 100, Murray, UT 84107', phone: '(801) 545-6000', website: 'finwisebank.com', tier: 'sponsor' },

    // AMBASSADORS
    { name: 'Hometown Values', category: 'Local Marketing/Magazine', address: '3283 Jordan Line Parkway, West Jordan, UT 84088', phone: '(801) 390-8550', website: 'hometownvalues.net', tier: 'ambassador' },
    { name: 'Coach Kathy White', category: 'Life Coaching', address: '5747 South 665 West, Murray, UT 84123', phone: '(801) 680-5877', website: 'coachkathywhite.com', tier: 'ambassador' },
    { name: 'Murray Youth Community Council', category: 'Youth Development', address: '141 E 5600 S Suite 315, Murray, UT 84107', phone: '(801) 808-0830', tier: 'ambassador' },
    { name: 'Beyond Creation Institute', category: 'Personal Development', address: '4764 S 900 E, STE 1, Murray, UT 84117', phone: '(801) 674-7329', website: 'BeyondCreationInstitute.com', tier: 'ambassador' },
    { name: 'Roe and Associates/PFS', category: 'Financial Services', address: '301 E 6240 S, Murray, UT 84107', phone: '(801) 634-5356', website: 'livemore.net', tier: 'ambassador' },
    { name: 'Park City Toffee', category: 'Confectionery', address: '1920 Canyons Resort Drive, Park City, UT 84098', phone: '(435) 200-3493', website: 'parkcitytoffee.com', tier: 'ambassador' },
    { name: 'Murray Children\'s Pantry', category: 'Nonprofit/Food Bank', address: '170 East 5770 South, Murray, UT 84107', phone: '(385) 743-8808', website: 'murraychildrenspantry.org', tier: 'ambassador' },
    { name: 'Total Success Business Solutions', category: 'Business Coaching', address: '8663 Highland Dr., Sandy, UT 84093', phone: '(801) 718-3851', website: 'totalsuccessbusinesssolutions.com', tier: 'ambassador' },
    { name: 'LegalShield', category: 'Legal Services', address: '97 E Wicker Ln, Bountiful, UT 84010', phone: '(801) 205-5132', website: 'MrGeorgeWilkinson.com', tier: 'ambassador' },
    { name: 'Murray Partners 4 Prevention', category: 'Community Prevention', address: '141 E 5600 S Suite 315, Murray, UT 84107', phone: '(801) 808-0830', website: 'murrayp4p.com', tier: 'ambassador' },
    { name: 'Dwight Christie Consulting', category: 'Financial Consulting', address: '141 East 5600 South, Suite 315, Murray, UT 84107', phone: '(801) 592-4878', website: 'dwightchristie.com', tier: 'ambassador' },
    { name: 'WaFd Bank', category: 'Banking', address: '405 S Main St STE 100, Salt Lake City, UT 84111', phone: '(801) 366-2244', website: 'wafdbank.com', tier: 'ambassador' },
    { name: 'PostNet UT115', category: 'Printing/Design', address: '3556 S 5600 W, West Valley City, UT 84120', phone: '(801) 965-9814', website: 'locations.postnet.com', tier: 'ambassador' },
    { name: 'Primerica Financial Services', category: 'Insurance/Financial', address: '1042 W Park Reserve Way, Midvale, UT 84047', phone: '(812) 240-6487', website: 'primerica.com', tier: 'ambassador' },

    // MEMBERS
    { name: 'AAA Flooring, Inc.', category: 'Flooring', address: '249 West 4860 South, Murray, UT 84107', phone: '(801) 263-9990', website: 'aaarestorationutah.com', tier: 'member' },
    { name: 'Advanced Spine & Disc', category: 'Healthcare', address: '5250 So. Commerce Drive, #155, Murray, UT 84107', phone: '(801) 747-7776', tier: 'member' },
    { name: 'Any Lab Test Now', category: 'Testing Services', address: '5616 S 900 E, Murray, UT 84121', phone: '(801) 305-4689', website: 'anylabtestnow.com', tier: 'member' },
    { name: 'Aries Global Logistics', category: 'Logistics', address: '9875 S. 500 W., South Jordan, UT 84070', phone: '(801) 428-8370', website: 'ariesgl.com', tier: 'member' },
    { name: 'Avallon Music', category: 'Music Studio/Education', address: '4991 S. Commerce Drive, Murray, UT 84107', phone: '(801) 664-9335', website: 'avallonmusic.com', tier: 'member' },
    { name: 'Bedrock Quartz Counter Tops', category: 'Home Improvement', address: '1276 Vine St., Murray, UT 84107', tier: 'member' },
    { name: 'Big Brothers Big Sisters', category: 'Youth Mentoring', address: '2121 S. State St, SLC, UT 84106', phone: '(801) 313-0303', website: 'bbbsu.org', tier: 'member' },
    { name: 'Biznis Resource', category: 'Business Consulting', address: '11017 S. Rodnia Circle, Sandy, UT 84092', phone: '(385) 528-8584', website: 'BiznisResource.com', tier: 'member' },
    { name: 'Boys and Girls Club of Greater Salt Lake', category: 'Youth Services', address: '244 E Myrtle Ave, Murray, UT 84107', phone: '(801) 261-6181', website: 'gslclubs.org', tier: 'member' },
    { name: 'Brodsky Built', category: 'Real Estate Development', address: '84 West 4800 South, Ste 300, Murray, UT 84107', phone: '(801) 506-9611', website: 'brodskybuiltutah.com', tier: 'member' },
    { name: 'btone FITNESS Brickyard', category: 'Fitness', address: '425 West 200 North, Unit 461, Millcreek, UT 84103', phone: '(857) 445-1250', website: 'btonefitness.com', tier: 'member' },
    { name: 'Chimichurri Grill', category: 'Food Truck', address: '4318 South 4665 West, West Valley City, UT 84120', phone: '(801) 699-5497', website: 'thechimichurrigrill.com', tier: 'member' },
    { name: 'Clinical Innovations', category: 'Healthcare', address: '747 West 4170 South, Murray, UT 84123', phone: '(801) 268-8200', tier: 'member' },
    { name: 'Copa Health', category: 'Healthcare', address: '5323 S. Woodrow Street, Suite 200, Murray, UT 84107', phone: '(385) 318-3200', website: 'copahealth.org', tier: 'member' },
    { name: 'Creative Learning Academy', category: 'Education', address: '5979 Fashion Blvd, Murray, UT 84107', phone: '(801) 550-1063', website: 'clautah.net', tier: 'member' },
    { name: 'Devenir Supports', category: 'Support Services', address: '5296 s. Commerce Dr. Suite 102, Murray, UT 84107', phone: '(385) 206-9871', website: 'devenirsupports.com', tier: 'member' },
    { name: 'D. L. Evans Bank', category: 'Banking', address: '156 E WINCHESTER ST, Murray, UT 84107', phone: '(801) 414-2452', website: 'dlevans.com', tier: 'member' },
    { name: 'Elevated Consultants LLC', category: 'AI Consulting', address: '1914 S 1300 E, Salt Lake City, UT 84105', phone: '(385) 371-8083', website: 'elevatedconsultantsllc.com', tier: 'member' },
    { name: 'Elevated Mountain Guides', category: 'Outdoor Services', address: '369 E 900 S, #144, Salt Lake City, UT 84111', phone: '(801) 400-2542', website: 'elevatedmountainguides.org', tier: 'member' },
    { name: 'Fashion Place Mall', category: 'Shopping Center', address: '6191 So. State, #201, Murray, UT 84107', phone: '(801) 290-1407', tier: 'member' },
    { name: 'Fiscal Fusion Accounting', category: 'Accounting', address: '6876 S 90 E Apt A, Midvale, UT 84047', phone: '(801) 200-3766', website: 'fiscalfusionaccounting.com', tier: 'member' },
    { name: 'FMK Foundation, The', category: 'Nonprofit', address: '5411 S Vine Street, Suite 3B, Murray, UT 84107', phone: '(801) 641-1571', website: 'thegivebackbrokerage.com', tier: 'member' },
    { name: 'Gateway Title Insurance Agency, LLC', category: 'Title Services', address: '434 West Ascension Way, STE 125, Murray, UT 84123', phone: '(801) 495-2381', website: 'gatewaytitleutah.com', tier: 'member' },
    { name: 'Gibson\'s Pharmacy', category: 'Pharmacy', address: '240 East Winchester, Murray, UT 84107', phone: '(801) 262-5526', website: 'gibsonspharmacyrx.com', tier: 'member' },
    { name: 'Give Back & Connect', category: 'Networking/Business', address: '5411 S Vine St. #3, Murray, UT 84107', phone: '(801) 641-1571', website: 'givebackandconnect.com', tier: 'member' },
    { name: 'Goldenwest Credit Union', category: 'Banking', address: '6007 S Fashion Blvd, Murray, UT 84107', phone: '(801) 302-4022', website: 'gwcu.org', tier: 'member' },
    { name: 'Gosdis Law', category: 'Legal Services', address: '5085 South State Street, Murray, UT 84107', phone: '(801) 200-1578', website: 'gosdislaw.com', tier: 'member' },
    { name: 'Hamlet Homes', category: 'Real Estate Development', address: '84 W. 4800 S., Suite 200, Murray, UT 84107', phone: '(801) 842-5360', website: 'hamlethomes.com', tier: 'member' },
    { name: 'Hammers Recycling', category: 'Recycling', address: '4232 South 500 West, Murray, UT 84123', phone: '(801) 577-1938', tier: 'member' },
    { name: 'Happy House Cleaning', category: 'Cleaning Services', address: '9860 S. 700 E., Suite 15 A, Sandy, UT 84070', phone: '(801) 651-6682', website: 'happyhousecleaning.com', tier: 'member' },
    { name: 'Happy Tummie', category: 'Food Truck', address: '231 W 4500 S, Murray, UT 84116', phone: '(801) 688-6553', website: 'happytummie.com', tier: 'member' },
    { name: 'Holiday Inn Express & Suites Murray', category: 'Hotel', address: '5429 South Commerce Dr., Murray, UT 84107', phone: '(801) 266-0800', tier: 'member' },
    { name: 'HomeWell Care Services', category: 'Home Care', address: '5411 S. Vine St, Unit 2B, Murray, UT 84107', phone: '(801) 572-2030', website: 'homewellcares.com', tier: 'member' },
    { name: 'Intellipop', category: 'Internet Service Provider', address: '673 S Innovation Cir, B4, Payson, UT 84651', phone: '(801) 300-7788', website: 'intellipop.com', tier: 'member' },
    { name: 'Inwest Title Services', category: 'Title Services', address: '1100 E 6600 S, Suite 120, Murray, UT 84107', phone: '(801) 264-0700', website: 'inwesttitle.com', tier: 'member' },
    { name: 'Jamba', category: 'Smoothies/Juice Bar', address: '5590 South Van Winkle Exp., Murray, UT 84117', phone: '(925) 455-4743', website: 'jamba.com', tier: 'member' },
    { name: 'JC Pro Design', category: 'Design Services', address: '6186 S 300 W, Murray, UT 84107', phone: '(801) 557-5066', website: 'jcprodesign.com', tier: 'member' },
    { name: 'Justice By Objectives', category: 'Nonprofit/Criminal Justice', address: '141 East 5600 South, Ste 300, #302, Murray, UT 84107', phone: '(435) 565-5229', website: 'justice-by-objectives.org', tier: 'member' },
    { name: 'Knotted Beauty', category: 'Massage/Esthetics', address: '4885 S 900 E Suite 211, Murray, UT 84094', phone: '(219) 765-1847', website: 'knottedbeauty.com', tier: 'member' },
    { name: 'K Real Estate Utah', category: 'Real Estate', address: '5411 S. Vine St, #3, 4, Murray, UT 84107', phone: '(801) 641-1571', website: 'thegivebackbrokerage.com', tier: 'member' },
    { name: 'Larry H. Miller Chevrolet', category: 'Auto Dealership', address: '5500 South State Street, Murray, UT 84107', phone: '(801) 264-3200', tier: 'member' },
    { name: 'Les Schwab', category: 'Tire Shop', address: '4355 South State Street, Murray, UT 84107', phone: '(801) 288-0660', website: 'lesschwab.com', tier: 'member' },
    { name: 'Loan Factory', category: 'Real Estate Services', address: 'Transaction Coordination Services', phone: '(801) 792-1257', website: 'yourtcpartner.com', tier: 'member' },
    { name: 'MaestroHQ.com', category: 'Business Services', address: '5411 S. Vine #3, Murray, UT 84107', phone: '(801) 243-4750', website: 'MaestroHQ.com', tier: 'member' },
    { name: 'Make a Wish Foundation of Utah', category: 'Nonprofit', address: '771 East Winchester, Murray, UT 84107', phone: '(801) 305-1930', website: 'utah.wish.org', tier: 'member' },
    { name: 'Master Wireless, LLC (AT&T)', category: 'Telecommunications', address: '5692 S 900 E, Suite 10, Murray, UT 84121', phone: '(385) 250-4439', website: 'masterwirelessmi.com', tier: 'member' },
    { name: 'MaxLiving Chiropractic Wasatch Front', category: 'Chiropractic', address: '5444 S 900 E, Murray, UT 84117', phone: '(720) 335-9848', website: 'maxlivingwasatchfront.com', tier: 'member' },
    { name: 'Memorial Mortuaries', category: 'Funeral Services', address: '5850 South 900 East, Murray, UT 84107', phone: '(801) 262-4631', website: 'memorialutah.com', tier: 'member' },
    { name: 'Mike Hale Acura', category: 'Auto Dealership', address: '5601 South State, Murray, UT 84107', phone: '(801) 263-0202', website: 'mikehale.com', tier: 'member' },
    { name: 'MK Consulting', category: 'Digital Marketing', address: '1831 Hidden Meadows Drive, Suite 1e, Holladay, UT 84117', phone: '(385) 212-0066', website: 'mkconsultingslc.com', tier: 'member' },
    { name: 'Mobility Prosthetics', category: 'Medical Devices', address: '480 East Winchester Street Suite 275, Murray, UT 84107', phone: '(801) 997-1367', tier: 'member' },
    { name: 'Mountain West Commercial Driving School', category: 'Education', address: '4700 S 900 E #8, Murray, UT 84117', phone: '(801) 698-7978', website: 'mountainwestcdl.com', tier: 'member' },
    { name: 'Mount Liberty College', category: 'Education', address: '5288 S. Commerce Drive, Suite B-218, Murray, UT 84107', phone: '(801) 997-0197', website: 'johnadamscollege.org', tier: 'member' },
    { name: 'Murray City Council', category: 'Government', address: '10 East 4800 South, Murray, UT 84107', phone: '(801) 264-2603', website: 'murray.utah.gov', tier: 'member' },
    { name: 'Murray Education Foundation', category: 'Nonprofit/Education', address: '5102 Commerce Drive, Building 1, Murray, UT 84107', phone: '(385) 347-6299', website: 'murrayeducationfoundation.org', tier: 'member' },
    { name: 'Murray Parkway Golf Course', category: 'Golf', address: '6345 Murray Parkway Ave., Murray, UT 84123', phone: '(801) 262-4653', website: 'parkwaygolf.org', tier: 'member' },
    { name: 'Murray School District', category: 'Education', address: '5440 S. State Street, Murray, UT 84107', phone: '(801) 288-1131', website: 'murrayschools.org', tier: 'member' },
    { name: 'Neighbors of Murray City', category: 'Magazine/Community', address: '5562 S. Edgeberry Dr, Murray, UT 84123', phone: '(801) 520-3342', tier: 'member' },
    { name: 'NeighborWorks Salt Lake', category: 'Nonprofit/Housing', address: '4843 Poplar Street, Murray, UT 84107', phone: '(801) 539-1590', website: 'nwsaltlake.org', tier: 'member' },
    { name: 'The Other Side Academy', category: 'Education', address: '667 E 100 S, Salt Lake City, UT 84102', phone: '(801) 506-1655', tier: 'member' },
    { name: 'Pentalon Construction', category: 'Construction', address: '4376 South 700 East Suite 100, Murray, UT 84107', phone: '(801) 871-0342', website: 'pentalonconstruction.com', tier: 'member' },
    { name: 'P.F. Chang\'s', category: 'Restaurant', address: '6227 South State Street, Murray, UT 84107', phone: '(385) 474-0033', website: 'pfchangs.com', tier: 'member' },
    { name: 'Playworks Utah', category: 'Youth Organization', address: '141 5600 S #304, Murray, UT 84041', phone: '(385) 394-1701', website: 'playworks.org', tier: 'member' },
    { name: 'Pratt and LeFevre Corporation', category: 'Professional Services', address: '450 Simmons Way, Suite 760, Kaysville, UT 84037', phone: '(801) 772-8848', website: 'prattandlefevre.com', tier: 'member' },
    { name: 'Project Rainbow Utah', category: 'Nonprofit/LGBTQ+', address: '141 East 5600 South #305, Murray, UT 84107', phone: '(801) 518-1390', website: 'projectrainbowutah.org', tier: 'member' },
    { name: 'Project Read', category: 'Nonprofit/Literacy', address: '141 East 5600 South #312, Murray, UT 84107', phone: '(801) 310-6654', website: 'projectreadutah.org', tier: 'member' },
    { name: 'Quan Ngo - Insurance Agent', category: 'Insurance', address: '3461 S State Street Suite 1D, South Salt Lake, UT 84107', phone: '(801) 209-2158', website: 'Medicareadvocates.com', tier: 'member' },
    { name: 'Reborn Pelvic Health & Wellness', category: 'Healthcare', address: '6040 S Fashion Blvd, Suite #101, Murray, UT 84107', phone: '(801) 702-8475', website: 'rebornphw.com', tier: 'member' },
    { name: 'Remedy Tattoo Parlor', category: 'Tattoo Shop', address: '6618 S State Street, Murray, UT 84107', phone: '(801) 266-3201', website: 'remedytattooparlor.com', tier: 'member' },
    { name: 'Rising Energy', category: 'Bodywork/Massage', address: '776 E. Ashton Ave., Salt Lake City, UT 84106', phone: '(385) 549-4156', tier: 'member' },
    { name: 'Seagull Printing', category: 'Printing', address: '6969 High Tech Drive, Midvale, UT 84047', phone: '(801) 810-5557', website: 'seagullprinting.com', tier: 'member' },
    { name: 'SelectHealth', category: 'Insurance/Healthcare', address: '5381 Green Street, Murray, UT 84123', phone: '(801) 442-7955', website: 'selecthealth.org', tier: 'member' },
    { name: 'Shiny Shell Carwash', category: 'Car Wash', address: '3135 S Richmond Street, Salt Lake City, UT 84106', phone: '(310) 982-4708', website: 'shinyshell.com', tier: 'member' },
    { name: 'Silver Key Benefits', category: 'Insurance', address: '3780 S West Temple Dr #101, Salt Lake City, UT 84115', phone: '(801) 889-2771', website: 'silverkeybenefits.com', tier: 'member' },
    { name: 'Sol and Sabor', category: 'Mexican Restaurant', address: '4700 S. 900 E. Suit 25, Murray, UT 84107', phone: '(801) 833-1019', website: 'solandsabor.com', tier: 'member' },
    { name: 'State Wide Insurance', category: 'Insurance', address: '1035 West Bellwood Lane, #160, Murray, UT 84123', phone: '(801) 506-5060', website: 'statewideslc.com', tier: 'member' },
    { name: 'Studio 56 Dance Center', category: 'Dance Studio', address: '170 W Winchester St, Murray, UT 84107', phone: '(801) 261-3182', website: 'studio56dance.com', tier: 'member' },
    { name: 'Summit Technology', category: 'IT Services', address: '50 West Broadway, Salt Lake City, UT 84101', phone: '(801) 961-1183', website: 'greatservice.com', tier: 'member' },
    { name: 'Supernova Marketing LLC', category: 'Marketing', address: '578 W SAGE RIVER WAY, Murray, UT 84123', phone: '(760) 809-1965', website: 'supernovamrktg.com', tier: 'member' },
    { name: 'The Advocates', category: 'Legal Services', address: '737 E Winchester St, Salt Lake City, UT 84107', phone: '(801) 326-0809', website: 'utahadvocates.com', tier: 'member' },
    { name: 'The Alias Group', category: 'Professional Services', address: '211 Lake Dr, Suite J, Newark, DE 19702', phone: '(302) 563-6947', website: 'thealiasgroup.com', tier: 'member' },
    { name: 'The Break Sports Grill', category: 'Restaurant/Bar', address: '4760 S 900 E, Murray, UT 84117', phone: '(801) 987-3354', website: 'Thebreakgrill.com', tier: 'member' },
    { name: 'The Royce on 9th', category: 'Apartment Complex', address: '853 E 4680 S, Murray, UT 84117', phone: '(385) 415-3991', website: 'liveattheroyce.com', tier: 'member' },
    { name: 'Thumzup Media Corporation', category: 'Marketing/Technology', address: '11845 W. Olympic Blvd 1100W #13, Los Angeles, CA 90064', phone: '(310) 237-2887', website: 'thumzupmedia.com', tier: 'member' },
    { name: 'Tuff Shed', category: 'Storage Buildings', address: '5501 South 320 West, Salt Lake City, UT 84107', phone: '(385) 378-2056', website: 'tuffshed.com', tier: 'member' },
    { name: 'USA Ninja Challenge Murray', category: 'Fitness/Kids Activities', address: '4731 South Commerce Drive, Murray, UT 84107', phone: '(385) 425-3099', website: 'ninjamurray.com', tier: 'member' },
    { name: 'Utah Wealth Strategies', category: 'Financial Management', address: '1100 E 6600 S, Ste 420, Murray, UT 84121', phone: '(801) 365-1098', website: 'utahwealthstrategies.com', tier: 'member' },
    { name: 'Visit Salt Lake', category: 'Tourism', address: '90 S West Temple, Salt Lake City, UT 84101', phone: '(801) 534-4900', website: 'visitsaltlake.com', tier: 'member' },
    { name: 'WasteLess Solutions', category: 'Nonprofit/Food Waste', address: '141 East 5600 South, Suite 300, Murray, UT 84107', website: 'wastelesssolutions.org', tier: 'member' },
    { name: 'Western Front Wealth Advisors', category: 'Financial Services', address: '488 E Winchester St, STE 400, Murray, UT 84107', website: 'adventurevanadvisor.com', tier: 'member' },
    { name: 'Wild Grace LLC', category: 'Wellness Center', address: '5282 S Commerce Drive, Murray, UT 84107', phone: '(801) 252-6202', website: 'wildgrace.be', tier: 'member' },
    { name: 'Wingers Restaurant & Alehouse', category: 'Restaurant/Bar', address: '4790 S. State St., Murray, UT 84107', phone: '(801) 685-8889', website: 'wingerbros.com', tier: 'member' },
    { name: 'Youthlinc', category: 'Youth Services', address: '1166 E Brickyard Rd, Salt Lake City, UT 84106', phone: '(801) 467-4417', website: 'youthlinc.org', tier: 'member' },
    { name: 'ZenBusiness', category: 'Business Services', address: '5511 Parkcrest Drive, Suite 103, Austin, TX 78731', phone: '(844) 493-6249', website: 'zenbusiness.com', tier: 'member' },
    { name: 'Chartway Credit Union', category: 'Banking', address: '5338 South College Drive, Murray, UT 84123', phone: '(801) 520-8561', website: 'chartway.com', tier: 'member' },
];

async function seed() {
    console.log('Seeding members...');

    const { data, error } = await supabase
        .from('members')
        .insert(businesses);

    if (error) {
        console.error('Error seeding data:', error);
    } else {
        console.log('Seeded successfully!');
    }
}

seed();
