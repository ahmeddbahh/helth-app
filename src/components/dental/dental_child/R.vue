<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 15 57.85 113.68"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_R_all">
        <g id="CHID_DENT_R">
          <path
            id="CHID_DENT_CROWN_R"
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
            d="M268.28,260.17c5.53-.63,5.29-1.21,10.09-1.66a69.75,69.75,0,0,1,8.72-.19c2.39.1,4.23.3,6.65.57,1.07.12,3.38.39,6.29.85,1.94.31,1,.2,4.8.86a18.15,18.15,0,0,1,5.41,1.44,5.6,5.6,0,0,1,.74.44c1.5,1.15.76,2.39-.59,6.64-1.64,5.17-.83,4.23-1.76,6.33-.41.92-.8,1.62-7.06,9.7-2.07,2.69-2.41,3.1-3.52,3.59-3.2,1.4-6.78.78-15.48.52-13.06-.38-14.53.74-17.44-.52-1.32-.58-1.54-1.17-5.68-9a38.94,38.94,0,0,1-2.54-5.27c-2.75-7.73-1.5-9.78-.79-10.54a10.33,10.33,0,0,1,4.7-2.85C263,260.42,264.12,260.64,268.28,260.17Z"
            transform="translate(-254.36 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.71"
          />
          <path
            id="CHID_DENT_ROOT_R"
            v-if="selectedTooth.dent.root1"
            d="M264.55,289.9c-1.83,1.09-.5,2.33,1,8A54.9,54.9,0,0,1,267.09,310a35,35,0,0,1-1.56,9.91c-2.58,9-6.84,12.73-4.9,13.39,2.65.91,13.7-5,21.16-11.17a50.2,50.2,0,0,0,12.54-15.51c2.11-3.71.12-1.27,4.11-11,1.17-2.84,2-4.54.2-5.59-2-1.2-5.5-.46-12.35-.21C272.57,290.39,267.5,288.13,264.55,289.9Z"
            transform="translate(-254.36 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.71"
          />
        </g>
        <path
          id="CHID_DENT_fiiling-caries_class_I_R"
          v-if="selectedTooth.filling_caries_class_i"
          d="M291.85,268.94H277.57c-3.51,0-6.35-1.53-6.35-3.41V262.3a2,2,0,0,1,1-1.77c.38-.25.95-.5,3.83-1,1-.19,2.28-.4,3.76-.62,1,0,2.31-.06,3.94-.07,1.8,0,2.7,0,3.75.05,2,.11,2.09.28,4.89.55s3.15.15,3.93.44a2.79,2.79,0,0,1,1.91,2.45v3.23C298.19,267.41,295.35,268.94,291.85,268.94Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_R"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M306.5,276.93l-3.4.52c-2.71,0-4.91-1.19-4.91-2.64V262.58a1.26,1.26,0,0,0-.12-1.5c-.42-.48-1.14-.7-1-.82a13,13,0,0,1,3.15.38c1.29.21,2.37.35,3.1.44l3.27.53a9.43,9.43,0,0,1,2.78.88,4.77,4.77,0,0,1,1.49,1.15l-3,10c-.19.55-.41,1.1-.65,1.68S306.75,276.42,306.5,276.93Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_R"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M271.18,260.52c-.58-.2-1.17.21-3.26.46s-2.71-.08-4.49.22a12.88,12.88,0,0,0-3.27,1,7.71,7.71,0,0,0-3.47,2.53,3,3,0,0,0-.41,1.87c.06,2.12.63,2.82,1.22,5.38.34,1.44,1.07,2.85,1.43,4.29a1.37,1.37,0,0,0,.82,1.1c1,.46,2.59.19,6.13-.33,5.7-.84,5.65-.76,5.94-.92,1.8-1,.15-2.39-.84-8a10.1,10.1,0,0,1,0-4.73C271.37,262,272.06,260.82,271.18,260.52Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_R"
          v-if="selectedTooth.filling_caries_class_v"
          x="19.54"
          y="56.67"
          width="19.24"
          height="2.89"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_R"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M266.05,274.58h-3.68l-4.58-1.16h0c-.22-1.17-.43-2.35-.65-3.52l5.23-.74h3.68c2.16,0,3.91.94,3.91,2.1v1.22C270,273.64,268.21,274.58,266.05,274.58Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_R"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M303.58,274.54h-4.23c-2.32,0-4.2-1-4.2-2.26v-.82c0-1.25,1.88-2.26,4.2-2.26h4.23l5.09.84h0l-.95,3.81h0Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoR"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M272.1,290.06c1.24-.29,1.81.38,6.53.57,2.67.1,5,0,9.26-.23,4.55-.23,4.59-.35,5.06-.23,4.2,1.1,1.19,11-5.9,20.52-7.55,10.18-19.14,19.25-21.69,18.6s8.11-8.56,7.58-21.54C272.6,299.44,267.83,291.05,272.1,290.06Z"
          transform="translate(-254.36 -226.77)"
          stroke-miterlimit="10"
          stroke-width="0.57"
        />
        <g id="CHID_DENT_Post_R" v-if="selectedTooth.post.post1">
          <path
            d="M290.56,289.07l-16.44-.6c-.61,0-1-.36-.95-.75l.58-2.82a1.19,1.19,0,0,1,1.26-.67l16.44.6c.6,0,1,.36.95.75l-.59,2.82C291.73,288.8,291.17,289.1,290.56,289.07Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M276.29,322.26l-2.07-.08c-1.08,0-1.84-.64-1.69-1.33l6.6-31.62c.14-.69,1.13-1.22,2.21-1.18l2.08.07c1.07,0,1.83.64,1.69,1.33l-6.6,31.62C278.36,321.76,277.37,322.3,276.29,322.26Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M286.41,295.72l-11.25-.41c-.3,0-.51-.18-.47-.37l.19-.91c0-.19.32-.34.62-.33l11.25.41c.3,0,.51.18.47.37l-.19.91C287,295.58,286.71,295.73,286.41,295.72Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M285.59,300.55l-11.32-.42c-.28,0-.48-.17-.44-.35l.2-.95c0-.18.29-.32.57-.31l11.32.42c.28,0,.48.16.44.34l-.2,1A.54.54,0,0,1,285.59,300.55Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M284.39,305.36l-11.23-.42c-.3,0-.52-.18-.48-.37l.19-.9c0-.19.32-.34.63-.33l11.23.41c.3,0,.51.18.47.38L285,305C285,305.22,284.7,305.37,284.39,305.36Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M283.58,310.18l-11.33-.42c-.28,0-.47-.16-.43-.34l.2-1c0-.18.29-.31.56-.3l11.34.42c.27,0,.47.16.43.34l-.2,1C284.11,310.06,283.86,310.19,283.58,310.18Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M282.59,315l-11.36-.42c-.27,0-.46-.16-.42-.33l.2-1a.53.53,0,0,1,.55-.29l11.29.41c.31,0,.53.18.49.38l-.2.94C283.11,314.88,282.86,315,282.59,315Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M281.38,319.81l-11.24-.41c-.3,0-.52-.18-.47-.38l.18-.89c0-.2.32-.35.63-.34l11.23.42c.31,0,.52.17.48.37l-.19.9C282,319.67,281.68,319.82,281.38,319.81Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="28.59"
            y1="88.15"
            x2="15.46"
            y2="92.53"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="28.83"
            y1="86.72"
            x2="15.69"
            y2="91.12"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="29.66"
            y1="83.29"
            x2="16.58"
            y2="87.73"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="29.87"
            y1="81.93"
            x2="16.87"
            y2="86.28"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="30.4"
            y1="78.52"
            x2="17.59"
            y2="82.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="30.71"
            y1="77.08"
            x2="17.84"
            y2="81.48"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="31.63"
            y1="73.68"
            x2="18.42"
            y2="78.04"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="31.86"
            y1="72.25"
            x2="18.78"
            y2="76.63"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="32.45"
            y1="68.86"
            x2="19.6"
            y2="73.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="32.72"
            y1="67.43"
            x2="19.95"
            y2="71.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M269.84,317.6"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M288.61,285.59l-11.21-.42c-1.19,0-2-.7-1.87-1.47l.72-3.42c.16-.77,1.26-1.36,2.45-1.31l11.2.41c1.2.05,2,.7,1.87,1.47l-.71,3.42C290.9,285,289.8,285.63,288.61,285.59Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_R">
          <path
            id="CHID_DENT_Right_Ginfivitis_R"
            v-if="selectedTooth.ginfivitis.right"
            d="M302.81,285.13c-1.07.2-.19,1.57-2.19,2.79-1.07.66-2.26.84-2.2,1.29s1.08.52,1.8,1c1.3.81.63,2.17.2,3.11-1.57,3.45.36.85-2.2,6.45-1.51,3.31-2.22,4.29-1.39,4.61,1,.39,3.65-.36,5.38-1.39,3.6-2.15.88-4.17,3-9.13,1.35-3.16,3.28-4.28,2-6.23C306.23,286.12,303.91,284.93,302.81,285.13Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            id="CHID_DENT_Left_Ginfivitis_R"
            v-if="selectedTooth.ginfivitis.left"
            d="M260.71,284.49c1,.24-.07,1.44,1.6,2.9.79.69,1.61.91,1.6,1.5s-.87.85-1.4,1.4c-1,1,0,2.2.6,3.22,1.34,2.14-.07,1.52,1.79,7.41.88,2.77,1.44,3.69.8,3.86-1,.28-4.06-1.43-6-3.33-2.51-2.47-1.18-3.41-3-8.48-1.2-3.36-2.34-4.48-1-6.12S259.62,284.22,260.71,284.49Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            id="CHID_DENT_Right_periodontal_R"
            v-if="selectedTooth.periodontal.right"
            d="M302.81,285.13c-1.07.2-.19,1.57-2.19,2.79-1.07.66-2.26.84-2.2,1.29s1.08.52,1.8,1c1.3.81.63,2.17.2,3.11-1.57,3.45.36.85-2.2,6.45-1.51,3.31-2.22,4.29-1.39,4.61,1,.39,3.65-.36,5.38-1.39,3.6-2.15.88-4.17,3-9.13,1.35-3.16,3.28-4.28,2-6.23C306.23,286.12,303.91,284.93,302.81,285.13Z"
            transform="translate(-254.36 -226.77)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            id="CHID_DENT_Left_periodontal_R"
            v-if="selectedTooth.periodontal.left"
            d="M260.71,284.49c1,.24-.07,1.44,1.6,2.9.79.69,1.61.91,1.6,1.5s-.87.85-1.4,1.4c-1,1,0,2.2.6,3.22,1.34,2.14-.07,1.52,1.79,7.41.88,2.77,1.44,3.69.8,3.86-1,.28-4.06-1.43-6-3.33-2.51-2.47-1.18-3.41-3-8.48-1.2-3.36-2.34-4.48-1-6.12S259.62,284.22,260.71,284.49Z"
            transform="translate(-254.36 -226.77)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            id="CHID_DENT_Right_perio_R"
            v-if="selectedTooth.perio.right"
            d="M302.81,285.13c-1.07.2-.19,1.57-2.19,2.79-1.07.66-2.26.84-2.2,1.29s1.08.52,1.8,1c1.3.81.63,2.17.2,3.11-1.57,3.45.36.85-2.2,6.45-1.51,3.31-2.22,4.29-1.39,4.61,1,.39,3.65-.36,5.38-1.39,3.6-2.15.88-4.17,3-9.13,1.35-3.16,3.28-4.28,2-6.23C306.23,286.12,303.91,284.93,302.81,285.13Z"
            transform="translate(-254.36 -226.77)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            id="CHID_DENT_Left_perio_R"
            v-if="selectedTooth.perio.left"
            d="M260.71,284.49c1,.24-.07,1.44,1.6,2.9.79.69,1.61.91,1.6,1.5s-.87.85-1.4,1.4c-1,1,0,2.2.6,3.22,1.34,2.14-.07,1.52,1.79,7.41.88,2.77,1.44,3.69.8,3.86-1,.28-4.06-1.43-6-3.33-2.51-2.47-1.18-3.41-3-8.48-1.2-3.36-2.34-4.48-1-6.12S259.62,284.22,260.71,284.49Z"
            transform="translate(-254.36 -226.77)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
        </g>
        <g id="CHID_DENT_Implant_R" v-if="selectedTooth.implant">
          <path
            d="M296.49,296.05l-30.78.05c-1.14,0-2-.42-2-.94l.07-3.71c0-.52.94-.94,2.08-.94l30.77-.05c1.14,0,2.06.42,2.05.94l-.07,3.71C298.56,295.63,297.63,296.05,296.49,296.05Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M282,340.15h-3.89c-2,0-3.64-.74-3.62-1.66l.77-41.66c0-.91,1.66-1.66,3.68-1.66h3.89c2,0,3.64.74,3.62,1.66l-.77,41.66C285.71,339.4,284.06,340.15,282,340.15Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M291.2,305l-21.06,0c-.56,0-1-.2-1-.46l0-1.19c0-.26.47-.46,1-.46l21.06,0c.56,0,1,.2,1,.45l0,1.2C292.21,304.74,291.76,305,291.2,305Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M291.42,311.3l-21.19,0c-.53,0-1-.19-.94-.43l0-1.25c0-.24.43-.43,1-.44l21.19,0c.52,0,.94.2.94.43l0,1.26C292.37,311.11,291.94,311.3,291.42,311.3Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M290.94,317.65l-21,0c-.57,0-1-.21-1-.47l0-1.18c0-.25.47-.46,1-.47l21,0c.57,0,1,.21,1,.47l0,1.18C292,317.44,291.51,317.65,290.94,317.65Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M291.2,324,270,324c-.52,0-.93-.19-.93-.42l0-1.27c0-.24.43-.43.95-.43l21.22,0c.51,0,.93.19.92.43l0,1.27C292.14,323.81,291.71,324,291.2,324Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M291.11,330.35l-21.28,0c-.5,0-.9-.18-.9-.41l0-1.29c0-.23.41-.42.91-.42l21.14,0c.57,0,1,.22,1,.48l0,1.23C292,330.16,291.61,330.35,291.11,330.35Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M290.6,336.7l-21,0c-.56,0-1-.21-1-.46l0-1.19c0-.26.47-.47,1-.47l21,0c.57,0,1,.21,1,.47l0,1.18C291.63,336.49,291.17,336.7,290.6,336.7Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.39"
            y1="103.46"
            x2="14.57"
            y2="109.85"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.31"
            y1="101.57"
            x2="14.49"
            y2="107.99"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.59"
            y1="97.05"
            x2="14.91"
            y2="103.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.51"
            y1="95.27"
            x2="14.92"
            y2="101.6"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.23"
            y1="90.77"
            x2="15.03"
            y2="97.16"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.3"
            y1="88.88"
            x2="14.98"
            y2="95.28"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.77"
            y1="84.38"
            x2="14.81"
            y2="90.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.68"
            y1="82.51"
            x2="14.96"
            y2="88.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.54"
            y1="78.05"
            x2="15.27"
            y2="84.46"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <line
            x1="37.52"
            y1="76.17"
            x2="15.37"
            y2="82.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M268.36,334.39"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
          <path
            d="M291.59,291.6l-21,0c-2.23,0-4-.82-4-1.83l.08-4.51c0-1,1.85-1.84,4.08-1.84l21,0c2.23,0,4,.81,4,1.83l-.08,4.51C295.65,290.77,293.82,291.59,291.59,291.6Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.57"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_R"
          v-if="selectedTooth.periapical.periapical1"
          d="M264.75,317.74c1,.19-1.6,5.64-1.8,6.07a44.68,44.68,0,0,1-2.37,4.62,23.8,23.8,0,0,0-1.47,4.07.87.87,0,0,0,.22,1,5.06,5.06,0,0,0,3.39.66,5.88,5.88,0,0,0,2.37-.91c2-1.06,2.38-.87,4.52-1.88a39.42,39.42,0,0,0,4.51-2.8c4.24-2.76,4.58-3,5-3.28a44.37,44.37,0,0,0,4-3c2.06-1.8,2.6-2.73,3-2.67.62.08.66,1.92-.34,3.65s-2.65,2.55-6.21,4.8c-6.36,4-5.87,4.49-9.37,5.95-2.87,1.2-6.46,2.7-9.71,2.07a5.76,5.76,0,0,1-4.4-3.41c-.78-1.91.86-2.37,2.94-7.23.85-2,1-3,2.37-4.68C262.38,319.43,264.14,317.62,264.75,317.74Z"
          transform="translate(-254.36 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.57"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_R"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M294.44,259.84a78.25,78.25,0,0,0-12.19-.51,75,75,0,0,0-11.36,1.25,53.81,53.81,0,0,0-9.59,1.77c-.83.24-1.6.48-2.33.74l-1.79,1.34c-.82.56-.83,1.31-.12,1.77a4.1,4.1,0,0,0,2,.44h51.07a2.27,2.27,0,0,0,.48-1,1.92,1.92,0,0,0-.27-1.41L309,263.09a37.2,37.2,0,0,0-4.52-1.55A51.77,51.77,0,0,0,294.44,259.84Z"
          transform="translate(-254.36 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.71"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_R"
          v-if="selectedTooth.crown.onlay"
          d="M294.44,259.84a78.25,78.25,0,0,0-12.19-.51,75,75,0,0,0-11.36,1.25,53.81,53.81,0,0,0-9.59,1.77c-.83.24-1.6.48-2.33.74l-1.79,1.34c-.82.56-.83,1.31-.12,1.77a4.1,4.1,0,0,0,2,.44h51.07a2.27,2.27,0,0,0,.48-1,1.92,1.92,0,0,0-.27-1.41L309,263.09a37.2,37.2,0,0,0-4.52-1.55A51.77,51.77,0,0,0,294.44,259.84Z"
          transform="translate(-254.36 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.71"
        />
        <g id="CHID_DENT_Endo_Crown_R">
          <path
            id="CHID_DENT_Endo_Crown_1R"
            v-if="selectedTooth.endo_crown.crown1"
            d="M274.65,273.39l18.54-.22,2.89-5.94c.07-.14-.13-.28-.41-.28H271.5c-.28,0-.49.14-.4.29Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.71"
          />
          <path
            id="CHID_DENT_Endo_Crown_2R"
            v-if="selectedTooth.endo_crown.crown2"
            d="M294.47,259.71a77.85,77.85,0,0,0-12.18-.52,76.64,76.64,0,0,0-11.37,1.25,53.87,53.87,0,0,0-9.58,1.77c-.83.24-1.61.49-2.33.74l-1.79,1.34c-.83.57-.84,1.31-.12,1.77a4,4,0,0,0,2,.44h51.07a2.21,2.21,0,0,0,.48-1,2,2,0,0,0-.27-1.4L309,263a39.68,39.68,0,0,0-4.52-1.55A51.62,51.62,0,0,0,294.47,259.71Z"
            transform="translate(-254.36 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.71"
          />
        </g>
      </g>
    </svg>
      <span class="text-center my-3">R</span>
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