import { Benefit } from "./components/Benefit";
import { CertificateBanner } from "./components/CertificateBanner";
import { SectionCustom } from "./components/SectionCustom";
import { CertificateText } from "./components/CertificateText";
import { Box } from "@chakra-ui/react";
import { dataDefaultTuyenSinh } from "./dataDefault";

export const TuyenSinhTuXa = ({ initialData }: { initialData: any }) => {
  const pageContent = initialData;
  return (
    <Box>
      <CertificateBanner CertificateBanner={pageContent?.acf?.banner || dataDefaultTuyenSinh.banner} />
      <Benefit benefit={pageContent?.acf?.why || dataDefaultTuyenSinh.why} />
      <SectionCustom 
        data={pageContent?.acf?.section_form || dataDefaultTuyenSinh.section_form} 
        accordionData={pageContent?.acf?.tabs || pageContent?.acf?.list_sub || dataDefaultTuyenSinh.tabs} 
      />
      <CertificateText text={pageContent?.acf?.section_text || dataDefaultTuyenSinh.section_text} wpcontent={pageContent?.content?.rendered || dataDefaultTuyenSinh.content.rendered} />
    </Box>
  );
};
