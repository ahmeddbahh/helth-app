<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 15 57.85 113.68"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_M_all">
        <g id="CHID_DENT_M">
          <path
            id="CHID_DENT_CROWN_M"
            v-if="selectedTooth.dent.crown1"
              :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
            d="M267.94,260.06c-7,2.32-10.53,3.47-11.69,4.59-2.05,2-1,4.24.47,6.89,6.32,11.7,9.48,17.55,15.42,19.13,8.3,2.2,17.88.45,20.34,0,3-.55,6.66-1.22,9.34-3.06,3.32-2.28,1.68-3.95,3.28-8.55,2.33-6.74,7.48-7.8,6.07-12.11-.21-.67-1.16-3.37-5.14-5.36-1.67-.84-2.56-.89-11.22-2.68s-9.64-2.12-12.15-2a43.19,43.19,0,0,0-8.65,1.41C272.58,258.62,271.09,259,267.94,260.06Z"
            transform="translate(-254.25 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.73"
          />
          <path
            id="CHID_DENT_ROOT_M"
            v-if="selectedTooth.dent.root1"
            d="M272.61,292.33c-3.19,1.78,1.31,5.83,7,14,7.75,11.14,6.65,14,14.72,21.56,4.12,3.82,9.44,7.76,10.76,7.39,1.14-.31-1.87-3.57-3.74-9.56C300,321.42,300,318,300,313.5a83.23,83.23,0,0,1,.7-10.46c1.12-9.83,2.57-13.17-.34-14-2.38-.7-4.39,1.23-12.21,2.32C279.07,292.59,275.06,291,272.61,292.33Z"
            transform="translate(-254.25 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.73"
          />
        </g>
        <path
          id="CHID_DENT_fiiling-caries_class_I_M"
          v-if="selectedTooth.filling_caries_class_i"
          d="M291.64,270.16H274.89c-4.4,0-8-1.76-8-3.94v-5.43a49.09,49.09,0,0,1,5.23-1.63,60.22,60.22,0,0,1,7.36-1.38l4.33-.33q4.28.71,8.76,1.56c2.39.46,4.69.92,6.92,1.38,0,1.95.07,3.89.1,5.83C299.61,268.4,296,270.16,291.64,270.16Z"
          transform="translate(-254.25 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_M"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M263.11,279a5.13,5.13,0,0,1-1,0,19,19,0,0,1-1.24-2,15.67,15.67,0,0,1-.73-1.59c-.67-1.05-1.19-1.93-1.55-2.56a20.79,20.79,0,0,1-1.83-3.71,4.87,4.87,0,0,1-.38-2.2,2.86,2.86,0,0,1,.91-2.05,7.09,7.09,0,0,1,3.09-1.47l3.09-1.24a17.4,17.4,0,0,0,2-.67c.57-.23,1-.46,1.22-.39s.05.19,0,.41a2.43,2.43,0,0,0-.05.89V277A4.62,4.62,0,0,1,263.11,279Z"
          transform="translate(-254.25 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_M"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M303.71,278.28a8.82,8.82,0,0,1-6.14,0c-2.38-1.19-.82-4.15.41-6.49s2.23-2.63,2.25-4.24c0-1.21-.52-1.64-.66-3.8-.17-2.7.6-3,.87-3,.56-.14,1.4.17,3.07.78a14.93,14.93,0,0,1,3.48,1.56,10.08,10.08,0,0,1,2.05,2.46c1.39,2,1.44,2.38,1.43,2.69a4,4,0,0,1-.82,1.9,23.06,23.06,0,0,1-1.84,2.46,40.28,40.28,0,0,0-2.25,3.35C304.43,277.73,304.39,278,303.71,278.28Z"
          transform="translate(-254.25 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_M"
          v-if="selectedTooth.filling_caries_class_v"
          x="19.36"
          y="55.1"
          width="19.3"
          height="2.94"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_M"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M302.47,275.49h-5.53c-1.9,0-3.45-1-3.45-2.16v-1.19c0-1.19,1.55-2.16,3.45-2.16h5.53l6.21,1.06-2.74,3.5Z"
          transform="translate(-254.25 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_M"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M267.63,275.49h-3.69q-1.57-.42-3.15-.87l-.83-.23-2.06-3.51,6-.9h3.69c2.16,0,3.92,1,3.92,2.14v1.24C271.55,274.54,269.79,275.49,267.63,275.49Z"
          transform="translate(-254.25 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoM"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M278.06,292.41c1.54-.55,3.24.47,8,.12,5.55-.41,7.16-2.08,9.08-1.73,3.95.71,1.79,8.6,1.27,16.14-.94,13.5,3.65,21.21,1.69,21.44-1.4.17-3.24-3.8-12.89-18.44C279.68,301.5,274.31,293.75,278.06,292.41Z"
          transform="translate(-254.25 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <g id="CHID_DENT_Post_M" v-if="selectedTooth.post.post1">
          <path
            d="M293.22,290.19l-13.74,1.43c-.51.05-1-.17-1.08-.49l-.6-2.31c-.09-.32.26-.62.77-.67l13.74-1.43c.51-.06,1,.16,1.07.48l.61,2.31C294.07,289.83,293.73,290.14,293.22,290.19Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M294.28,318.19l-1.74.18c-.9.1-1.75-.29-1.9-.86l-6.76-25.87c-.15-.57.46-1.1,1.37-1.2l1.73-.18c.9-.09,1.75.29,1.9.86L295.64,317C295.79,317.56,295.18,318.1,294.28,318.19Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M292.37,296l-9.4,1c-.25,0-.49-.09-.53-.24l-.2-.75c0-.15.13-.3.38-.33l9.41-1c.25,0,.48.08.52.24l.2.74C292.79,295.77,292.62,295.92,292.37,296Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M293.55,299.87l-9.46,1c-.24,0-.46-.08-.5-.22l-.2-.78c0-.15.12-.29.35-.32l9.47-1c.23,0,.45.08.49.22l.2.78C293.94,299.71,293.78,299.85,293.55,299.87Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M294.42,303.83l-9.39,1c-.25,0-.49-.08-.53-.24l-.19-.73c-.05-.17.13-.32.38-.34l9.39-1a.5.5,0,0,1,.54.24l.19.73C294.85,303.66,294.68,303.81,294.42,303.83Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.62,307.76l-9.48,1c-.23,0-.45-.08-.48-.22l-.21-.79c0-.15.12-.28.35-.31l9.47-1c.23,0,.45.07.49.21l.21.79C296,307.6,295.85,307.74,295.62,307.76Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M296.66,311.7l-9.5,1c-.22,0-.44-.07-.47-.21l-.21-.81c0-.14.11-.27.34-.29l9.43-1c.26,0,.51.09.55.25l.2.76C297,311.54,296.88,311.68,296.66,311.7Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M297.52,315.66l-9.4,1c-.25,0-.49-.08-.53-.24l-.19-.74c0-.16.13-.31.38-.33l9.39-1a.5.5,0,0,1,.54.24l.19.74C297.94,315.49,297.77,315.64,297.52,315.66Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="42.67"
            y1="84.83"
            x2="33.56"
            y2="89.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="42.31"
            y1="83.66"
            x2="33.21"
            y2="88.68"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.67"
            y1="80.84"
            x2="32.64"
            y2="85.89"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.33"
            y1="79.74"
            x2="32.31"
            y2="84.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="40.44"
            y1="76.97"
            x2="31.61"
            y2="81.94"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="40.14"
            y1="75.79"
            x2="31.26"
            y2="80.78"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="39.59"
            y1="72.98"
            x2="30.41"
            y2="77.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="39.23"
            y1="71.82"
            x2="30.17"
            y2="76.82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="38.41"
            y1="69.06"
            x2="29.55"
            y2="74.05"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="38.07"
            y1="67.9"
            x2="29.26"
            y2="72.85"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M287.19,315.24"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M290.27,287.65l-9.37,1c-1,.1-1.94-.32-2.1-.95l-.73-2.8c-.17-.63.51-1.22,1.51-1.33l9.36-1c1-.11,1.94.32,2.11.95l.73,2.8C291.94,287,291.27,287.54,290.27,287.65Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_M">
          <path
            id="CHID_DENT_Right_Ginfivitis_M"
            v-if="selectedTooth.ginfivitis.right"
            d="M305.79,281c-.73.17.51,1.42-.48,3.63a14.77,14.77,0,0,1-2.13,3.1h0l-1.66,1h0l1.42,1c1.21.95.37,2.51,0,3.37-.84,1.94.25,1.32-.47,5.69-.64,3.88-1.61,5-.48,5.44,1.34.5,4.85-.27,6.65-1.68,3.26-2.58-2-5-.48-10,1.08-3.45,4.23-4,3.56-6.73C311,283,306.85,280.75,305.79,281Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            id="CHID_DENT_Left_Ginfivitis_M"
            v-if="selectedTooth.ginfivitis.left"
            d="M262.62,284c.7,0,.67,1.07,2.37,3.11a8.73,8.73,0,0,0,2.85,2.58c2.11,1.12,4.24,1.18,4.27,1.82s-1.6.66-2.13,1.55c-.41.67.12,1.26.71,2.07,1.19,1.67.27,1.07,1.89,3.62,2.68,4.2,5.08,5.66,4.27,6.09s-5.66-.57-8.53-2.72c-3.78-2.83-.36-4.59-3.8-8.93-2-2.56-4.25-3.27-4.27-5.57C260.24,285.72,261.7,283.94,262.62,284Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            id="CHID_DENT_Right_periodontal_M"
            v-if="selectedTooth.periodontal.right"
            d="M305.79,281c-.73.17.51,1.42-.48,3.63a14.77,14.77,0,0,1-2.13,3.1h0l-1.66,1h0l1.42,1c1.21.95.37,2.51,0,3.37-.84,1.94.25,1.32-.47,5.69-.64,3.88-1.61,5-.48,5.44,1.34.5,4.85-.27,6.65-1.68,3.26-2.58-2-5-.48-10,1.08-3.45,4.23-4,3.56-6.73C311,283,306.85,280.75,305.79,281Z"
            transform="translate(-254.25 -226.77)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            id="CHID_DENT_Left_periodontal_M"
            v-if="selectedTooth.periodontal.left"
            d="M262.62,284c.7,0,.67,1.07,2.37,3.11a8.73,8.73,0,0,0,2.85,2.58c2.11,1.12,4.24,1.18,4.27,1.82s-1.6.66-2.13,1.55c-.41.67.12,1.26.71,2.07,1.19,1.67.27,1.07,1.89,3.62,2.68,4.2,5.08,5.66,4.27,6.09s-5.66-.57-8.53-2.72c-3.78-2.83-.36-4.59-3.8-8.93-2-2.56-4.25-3.27-4.27-5.57C260.24,285.72,261.7,283.94,262.62,284Z"
            transform="translate(-254.25 -226.77)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            id="CHID_DENT_Right_perio_M"
            v-if="selectedTooth.perio.right"
            d="M305.79,281c-.73.17.51,1.42-.48,3.63a14.77,14.77,0,0,1-2.13,3.1h0l-1.66,1h0l1.42,1c1.21.95.37,2.51,0,3.37-.84,1.94.25,1.32-.47,5.69-.64,3.88-1.61,5-.48,5.44,1.34.5,4.85-.27,6.65-1.68,3.26-2.58-2-5-.48-10,1.08-3.45,4.23-4,3.56-6.73C311,283,306.85,280.75,305.79,281Z"
            transform="translate(-254.25 -226.77)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            id="CHID_DENT_Left_perio_M"
            v-if="selectedTooth.perio.left"
            d="M262.62,284c.7,0,.67,1.07,2.37,3.11a8.73,8.73,0,0,0,2.85,2.58c2.11,1.12,4.24,1.18,4.27,1.82s-1.6.66-2.13,1.55c-.41.67.12,1.26.71,2.07,1.19,1.67.27,1.07,1.89,3.62,2.68,4.2,5.08,5.66,4.27,6.09s-5.66-.57-8.53-2.72c-3.78-2.83-.36-4.59-3.8-8.93-2-2.56-4.25-3.27-4.27-5.57C260.24,285.72,261.7,283.94,262.62,284Z"
            transform="translate(-254.25 -226.77)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
        </g>
        <g id="CHID_DENT_Implant_M" v-if="selectedTooth.implant">
          <path
            d="M299.86,295.31l-25.57,0c-1,0-1.71-.42-1.7-1l.06-3.78c0-.52.78-.95,1.73-.95l25.57-.05c.95,0,1.71.43,1.7.95l-.06,3.78C301.58,294.88,300.81,295.31,299.86,295.31Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M287.86,340.15h-3.23c-1.68,0-3-.75-3-1.68l.63-42.37c0-.93,1.39-1.69,3.06-1.69h3.23c1.68,0,3,.75,3,1.68l-.63,42.37C290.9,339.39,289.53,340.15,287.86,340.15Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.47,304.36l-17.5,0c-.47,0-.84-.21-.84-.47l0-1.22c0-.25.38-.47.85-.47l17.5,0c.46,0,.84.21.83.47l0,1.22C296.31,304.15,295.93,304.36,295.47,304.36Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.65,310.81l-17.61,0c-.44,0-.79-.19-.78-.43l0-1.28c0-.24.36-.44.79-.44l17.61,0c.44,0,.79.2.78.44l0,1.27C296.44,310.62,296.08,310.81,295.65,310.81Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.26,317.27l-17.47,0c-.48,0-.86-.21-.85-.47v-1.2c0-.27.4-.48.87-.48l17.47,0c.47,0,.85.21.85.47l0,1.2C296.12,317.06,295.73,317.27,295.26,317.27Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.47,323.73l-17.64,0c-.43,0-.77-.19-.77-.43l0-1.29c0-.24.36-.43.78-.43l17.64,0c.43,0,.77.2.77.43l0,1.3C296.25,323.53,295.9,323.73,295.47,323.73Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.39,330.18l-17.68,0c-.41,0-.75-.18-.74-.41l0-1.32c0-.23.34-.42.76-.42l17.56,0c.48,0,.86.22.86.48l0,1.25C296.15,330,295.81,330.18,295.39,330.18Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295,336.64l-17.48,0c-.47,0-.85-.21-.85-.47l0-1.2c0-.27.39-.48.86-.48l17.48,0c.47,0,.85.21.85.47l0,1.21C295.83,336.43,295.44,336.64,295,336.64Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.67"
            y1="103.29"
            x2="22.7"
            y2="109.79"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.6"
            y1="101.37"
            x2="22.64"
            y2="107.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.84"
            y1="96.77"
            x2="22.99"
            y2="103.35"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.77"
            y1="94.96"
            x2="22.99"
            y2="101.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.54"
            y1="90.39"
            x2="23.09"
            y2="96.89"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.59"
            y1="88.46"
            x2="23.04"
            y2="94.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.98"
            y1="83.89"
            x2="22.9"
            y2="90.37"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.91"
            y1="81.99"
            x2="23.03"
            y2="88.48"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.79"
            y1="77.45"
            x2="23.29"
            y2="83.97"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <line
            x1="41.77"
            y1="75.54"
            x2="23.37"
            y2="82"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M276.49,334.29"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
          <path
            d="M295.79,290.77l-17.42,0c-1.86,0-3.35-.83-3.34-1.86l.07-4.58c0-1,1.54-1.87,3.39-1.87l17.43,0c1.85,0,3.35.83,3.33,1.86l-.07,4.58C299.17,289.93,297.65,290.77,295.79,290.77Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.58"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_M"
          v-if="selectedTooth.periapical.periapical1"
          d="M289,323.76c.48-.06,1.24,1.5,3.51,3.84,1.87,1.92,1.85,1.36,5.1,4.32a26.63,26.63,0,0,0,5,3.4,4.44,4.44,0,0,0,2.38.62,2.46,2.46,0,0,0,1.59-.68c.53-.63-.13-1.35-.46-1.73-1.09-1.28-1.42-2.72-2.15-4.08a38,38,0,0,1-1.47-4.2c-1.24-3.71-1.49-4.44-1.13-4.51s1.95,1.26,2.83,2.34c1.28,1.59,1.32,2.5,2,4.21,1.3,3.13,2.36,2.95,3,5.32.52,1.78,1.12,3.88-1.11,4.94a10.54,10.54,0,0,1-5.66.43c-2.27-.41-2.55-1.25-6.46-4.2-3.41-2.58-4.41-2.85-5.55-4.45a8.81,8.81,0,0,1-1.35-3C289.09,326.15,288.45,323.85,289,323.76Z"
          transform="translate(-254.25 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.58"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_M"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M296.21,260.18l-14.43-2.52c-2.3.36-5,.87-7.82,1.61a66.13,66.13,0,0,0-7.77,2.49l-5.95,2c-.85.08-1.47.43-1.52.83s.45.66.53.7H307a1.66,1.66,0,0,0,1-.45c.26-.36-.09-.84-.91-1.08l-2.14-1.17c-1.18-.39-2.45-.78-3.81-1.16C299.39,261,297.75,260.54,296.21,260.18Z"
          transform="translate(-254.25 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.73"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_M"
          v-if="selectedTooth.crown.onlay"
          d="M296.21,260.18l-14.43-2.52c-2.3.36-5,.87-7.82,1.61a66.13,66.13,0,0,0-7.77,2.49l-5.95,2c-.85.08-1.47.43-1.52.83s.45.66.53.7H307a1.66,1.66,0,0,0,1-.45c.26-.36-.09-.84-.91-1.08l-2.14-1.17c-1.18-.39-2.45-.78-3.81-1.16C299.39,261,297.75,260.54,296.21,260.18Z"
          transform="translate(-254.25 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.73"
        />
        <g id="CHID_DENT_Endo_Crown_M">
          <path
            id="CHID_DENT_Endo_Crown_1M"
            v-if="selectedTooth.endo_crown.crown1"
            d="M274.4,272.1l18.6-.23,2.9-6c.07-.15-.13-.29-.41-.29l-24.24,0c-.29,0-.49.15-.41.3Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.73"
          />
          <path
            id="CHID_DENT_Endo_Crown_2M"
            v-if="selectedTooth.endo_crown.crown2"
            d="M296.25,260l-14.43-2.52c-2.3.36-5,.87-7.82,1.61a69,69,0,0,0-7.78,2.49l-5.94,2c-.85.08-1.47.43-1.52.83s.45.66.53.71H307a1.75,1.75,0,0,0,1-.46c.26-.36-.09-.84-.91-1.08l-2.14-1.17c-1.18-.38-2.45-.78-3.81-1.16C299.43,260.81,297.79,260.4,296.25,260Z"
            transform="translate(-254.25 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.73"
          />
        </g>
      </g>
    </svg>
    <span class="text-center my-3">M</span>
  </div>
</template>
<script>
export default {
    props:["selectedTooth"]
}
</script>
<style  lang="scss" scoped>
.single-tooth{
    width:100% ;
    height:100% ;
    position: relative;
    svg {
      width: 100%;
      height: 100%;
    }
    span {
      background: $tradmark-color;
      text-align: center;
      width:45px;
      height: 45px;
      font-size: 22px;
      font-weight: 500;
      padding: 10px;
      border-radius: 20px;
      color:#FFF;
      position: absolute;
      line-height: 1.3;
      bottom: -35px;
      left: 40%;
    }
}
</style>