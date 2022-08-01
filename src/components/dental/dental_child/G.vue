<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.69 100"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_G_all">
        <g id="CHID_DENT_G">
          <path
            id="CHID_DENT_ROOT_G"
            v-if="selectedTooth.dent.root1"
            d="M298.37,232.21c-1.13-.13-3,2.6-10.66,11.15-5.18,5.82-6.15,6.63-7.21,8.87-2.12,4.49,0,5-1.44,9.27-2.7,8-12.43,12.52-9.22,14,1.42.64,3.22-.29,9.8,0a69.48,69.48,0,0,1,12.1,1.62c5.63,1.27,7.14,2.49,8.94,2.15,2.38-.46,2.2-3,2-5.11-.67-7.6-1-11.4-1.35-12.61-2.3-7.91-4.28-14.69-3.26-22.72C298.55,235.12,299.5,232.34,298.37,232.21Z"
            transform="translate(-254.22 -226.47)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
          <path
            id="CHID_DENT_CROWN_G"
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
            d="M269.55,276.81c-3.3,1-4.75,2.87-7.49,6.58a31.82,31.82,0,0,0-3.75,6.45c-3.21,7.35-4.81,11-.87,13,2.15,1.08,5,1.3,10.67,1.74,7.46.58,9.26-.33,21.91-.53,7.17-.12,8.51.15,10.66-.54,4.16-1.33,4.67-4.05,5.19-6.85.45-2.44-.36-4.93-2-9.81s-2.37-5.62-3.17-6.18c-4.24-2.94-11.79-3.73-15.85-4.16C279.79,276,274.18,275.42,269.55,276.81Z"
            transform="translate(-254.22 -226.47)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
        </g>
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_G"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M269.1,304.05l-7.16-.72a10,10,0,0,1-4.54-1.73,2.76,2.76,0,0,1-.83-2,5,5,0,0,1,.23-2.34q1-2.86,1.91-5.73a32.1,32.1,0,0,1,2.51-4.84c.23-.37.47-.74.72-1.1H272c3,0,5.35,1.12,5.35,2.5V301.5c0,.3-.25,1.1-1.56,1.76A12.55,12.55,0,0,1,269.1,304.05Z"
          transform="translate(-254.22 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.6"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_G"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M302.27,286.08c-.84-.47-2.43-.23-5.74-.23-5.86,0-6.18-.05-6.83.14-2,.59-1.52,1.95-1.59,5.49-.06,3.09.7,6.21-.1,9.28-.14.53-.58,2.07,1,2.54a13.8,13.8,0,0,0,2.58.13c1.5,0,1.86,0,4.06,0a25.57,25.57,0,0,0,3-.09,11.29,11.29,0,0,0,2.37-.65c2.79-1.15,3.41-4.14,3.57-5.49a13,13,0,0,0-.3-4.2c-.19-1-.33-1.1-.89-3.37-.17-.71-.47-1.41-.59-2.12C302.6,286.54,302.7,286.32,302.27,286.08Z"
          transform="translate(-254.22 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.6"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_G"
          v-if="selectedTooth.filling_caries_class_v"
          x="17.01"
          y="54.47"
          width="21.82"
          height="2.84"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.6"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_G"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M304.5,294.3l-9.05.76c-2.45,0-4.43-.92-4.43-2.06v-1.2c0-1.14,2-2.06,4.43-2.06l7.74.84h0C303.63,291.82,304.07,293.06,304.5,294.3Z"
          transform="translate(-254.22 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.6"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_G"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M267.85,295.06l-9.38-1.68h0l.77-1.58.54-1.62h0l8.07-.44c2.44,0,4.43.92,4.43,2.06V293C272.28,294.14,270.29,295.06,267.85,295.06Z"
          transform="translate(-254.22 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.6"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoG"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M293.52,239.9c-1.39-.08-4.47,7.09-5.8,10.19-3.7,8.6-2,8.23-4.78,13.36-3.05,5.7-7.22,10.13-4.1,11.14,1.25.41,2.54-.11,6.15.32,4.36.52,5.34,1.6,6.83,1.43,3.05-.34,3-5.35,2.73-11.14-.31-7.9-.59-9.73-.68-13.52C293.66,243.8,294.54,240,293.52,239.9Z"
          transform="translate(-254.22 -226.47)"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <g id="CHID_DENT_Post_G" v-if="selectedTooth.post.post1">
          <path
            d="M280.21,276.72l13.67,1c.51,0,.88.35.83.71l-.36,2.56c-.05.35-.5.61-1,.58l-13.66-1c-.51,0-.88-.35-.83-.71l.36-2.56C279.26,277,279.71,276.69,280.21,276.72Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M290.49,246.78l1.73.13c.89.06,1.55.62,1.46,1.25l-4,28.7c-.09.63-.89,1.09-1.78,1l-1.73-.12c-.89-.07-1.55-.63-1.46-1.26l4-28.7C288.8,247.18,289.59,246.72,290.49,246.78Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M283.34,270.76l9.35.65c.25,0,.43.18.41.35l-.11.83a.45.45,0,0,1-.5.28l-9.35-.65c-.25,0-.43-.18-.41-.35l.12-.83C282.87,270.87,283.09,270.74,283.34,270.76Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M283.8,266.37l9.41.66c.23,0,.4.16.38.33l-.12.86c0,.17-.23.29-.46.27l-9.41-.66c-.24,0-.41-.16-.38-.32l.12-.87C283.36,266.48,283.57,266.36,283.8,266.37Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M284.57,262l9.33.65c.26,0,.44.18.42.36l-.12.81c0,.18-.25.31-.5.29l-9.34-.65c-.25,0-.44-.18-.41-.36l.11-.81A.45.45,0,0,1,284.57,262Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M285,257.63l9.42.66c.23,0,.4.15.38.32l-.12.87a.41.41,0,0,1-.46.26l-9.42-.66c-.23,0-.4-.16-.38-.32l.12-.87A.41.41,0,0,1,285,257.63Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M285.61,253.25l9.44.66c.23,0,.39.16.37.31l-.13.89a.38.38,0,0,1-.44.26l-9.38-.66c-.26,0-.45-.18-.42-.36l.11-.84A.41.41,0,0,1,285.61,253.25Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M286.39,248.89l9.34.65c.25,0,.44.18.41.36l-.11.81a.44.44,0,0,1-.5.29l-9.34-.65c-.26,0-.44-.18-.42-.35l.12-.82C285.91,249,286.14,248.87,286.39,248.89Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="31.1"
            y1="26.84"
            x2="41.79"
            y2="23.16"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="30.97"
            y1="28.15"
            x2="41.66"
            y2="24.45"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="30.44"
            y1="31.26"
            x2="41.08"
            y2="27.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="30.33"
            y1="32.49"
            x2="40.91"
            y2="28.84"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="30.05"
            y1="35.59"
            x2="40.47"
            y2="31.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="29.86"
            y1="36.9"
            x2="40.33"
            y2="33.2"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="29.26"
            y1="39.98"
            x2="40.01"
            y2="36.32"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="29.13"
            y1="41.28"
            x2="39.78"
            y2="37.6"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="28.8"
            y1="44.35"
            x2="39.25"
            y2="40.65"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="28.65"
            y1="45.65"
            x2="39.04"
            y2="41.98"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M296.06,251.19"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M282,280l9.31.66c1,.06,1.72.69,1.62,1.38l-.43,3.11c-.1.7-1,1.21-2,1.14l-9.32-.65c-1-.07-1.71-.69-1.62-1.39l.43-3.11C280.12,280.39,281,279.89,282,280Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_G">
          <path
            id="CHID_DENT_Left_Ginfivitis_G"
            v-if="selectedTooth.ginfivitis.left"
            d="M262.76,280.58c1-.1.12-1.49,2.39-2.75,1.81-1,4.29-1.16,4.23-1.79,0-.39-1-.43-1.47-1-.73-.74.26-1.59,1.28-2.57s2-2.18,3.13-3.25c1.71-1.7,1.07-1.46,4-5.06,2-2.4,2.63-2.92,2-3.68-.78-1-3.24-1.86-5.33-1.71-3.51.24-5.11,3.29-6.26,5.48-2.18,4.15.06,4.78-2.39,7.37s-5.75,3-5.88,5.05S261.49,280.7,262.76,280.58Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            id="CHID_DENT_Right_Ginfivitis_G"
            v-if="selectedTooth.ginfivitis.right"
            d="M304.13,283.32c-.87-.24.26-1.15-1.11-2.32-.78-.66-1.65-.8-1.65-1.28s1.34-.91,2.2-1.37c1.87-1,1.05-2.41.56-4.37-.69-2.73.4-1.92-.19-6.51-.37-2.9-.55-4.34-1.1-5.4s-1.13-1.79-.55-2c.87-.27,4,.85,5.88,2.23s1.66,2.47,2,5.57c.28,2.34.24.27,1.29,7.45.49,3.35.58,4.31-.74,5.48C308.87,282.51,305.27,283.64,304.13,283.32Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            id="CHID_DENT_Left_periodontal_G"
            v-if="selectedTooth.periodontal.left"
            d="M262.76,280.58c1-.1.12-1.49,2.39-2.75,1.81-1,4.29-1.16,4.23-1.79,0-.39-1-.43-1.47-1-.73-.74.26-1.59,1.28-2.57s2-2.18,3.13-3.25c1.71-1.7,1.07-1.46,4-5.06,2-2.4,2.63-2.92,2-3.68-.78-1-3.24-1.86-5.33-1.71-3.51.24-5.11,3.29-6.26,5.48-2.18,4.15.06,4.78-2.39,7.37s-5.75,3-5.88,5.05S261.49,280.7,262.76,280.58Z"
            transform="translate(-254.22 -226.47)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            id="CHID_DENT_Right_periodontal_G"
            v-if="selectedTooth.periodontal.right"
            d="M304.13,283.32c-.87-.24.26-1.15-1.11-2.32-.78-.66-1.65-.8-1.65-1.28s1.34-.91,2.2-1.37c1.87-1,1.05-2.41.56-4.37-.69-2.73.4-1.92-.19-6.51-.37-2.9-.55-4.34-1.1-5.4s-1.13-1.79-.55-2c.87-.27,4,.85,5.88,2.23s1.66,2.47,2,5.57c.28,2.34.24.27,1.29,7.45.49,3.35.58,4.31-.74,5.48C308.87,282.51,305.27,283.64,304.13,283.32Z"
            transform="translate(-254.22 -226.47)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            id="CHID_DENT_Left_perio_G"
            v-if="selectedTooth.perio.left"
            d="M262.76,280.58c1-.1.12-1.49,2.39-2.75,1.81-1,4.29-1.16,4.23-1.79,0-.39-1-.43-1.47-1-.73-.74.26-1.59,1.28-2.57s2-2.18,3.13-3.25c1.71-1.7,1.07-1.46,4-5.06,2-2.4,2.63-2.92,2-3.68-.78-1-3.24-1.86-5.33-1.71-3.51.24-5.11,3.29-6.26,5.48-2.18,4.15.06,4.78-2.39,7.37s-5.75,3-5.88,5.05S261.49,280.7,262.76,280.58Z"
            transform="translate(-254.22 -226.47)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            id="CHID_DENT_Right_perio_G"
            v-if="selectedTooth.perio.right"
            d="M304.13,283.32c-.87-.24.26-1.15-1.11-2.32-.78-.66-1.65-.8-1.65-1.28s1.34-.91,2.2-1.37c1.87-1,1.05-2.41.56-4.37-.69-2.73.4-1.92-.19-6.51-.37-2.9-.55-4.34-1.1-5.4s-1.13-1.79-.55-2c.87-.27,4,.85,5.88,2.23s1.66,2.47,2,5.57c.28,2.34.24.27,1.29,7.45.49,3.35.58,4.31-.74,5.48C308.87,282.51,305.27,283.64,304.13,283.32Z"
            transform="translate(-254.22 -226.47)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
        </g>
        <g id="CHID_DENT_Implant_G" v-if="selectedTooth.implant">
          <path
            d="M264.59,270l35.45,0c1.31,0,2.36.41,2.35.92l-.12,3.65c0,.51-1.1.92-2.41.92l-35.44-.05c-1.32,0-2.37-.41-2.35-.92l.12-3.65C262.2,270.45,263.28,270,264.59,270Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M281.72,226.77h4.47c2.33,0,4.19.73,4.16,1.63L289,269.33c0,.9-1.94,1.62-4.26,1.62h-4.48c-2.32,0-4.18-.74-4.15-1.64l1.33-40.92C277.48,227.5,279.39,226.77,281.72,226.77Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M270.79,261.32l24.25,0c.65,0,1.17.2,1.16.45l0,1.18c0,.25-.54.45-1.18.45l-24.26,0c-.65,0-1.16-.21-1.15-.46l0-1.17C269.61,261.52,270.14,261.32,270.79,261.32Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M270.6,255.08l24.41,0c.6,0,1.09.19,1.08.43l0,1.23c0,.23-.5.42-1.11.42l-24.41,0c-.6,0-1.08-.19-1.07-.42l0-1.24C269.5,255.27,270,255.08,270.6,255.08Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M271.22,248.85l24.21,0c.66,0,1.18.2,1.17.46l0,1.16c0,.25-.55.46-1.21.45l-24.21,0c-.66,0-1.19-.21-1.18-.47l0-1.15C270,249.05,270.56,248.85,271.22,248.85Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M271,242.61l24.44,0c.6,0,1.07.19,1.07.42l0,1.24c0,.23-.5.42-1.09.42l-24.45,0c-.59,0-1.07-.19-1.06-.42l0-1.25C269.91,242.79,270.4,242.61,271,242.61Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M271.17,236.37l24.5,0c.58,0,1,.19,1,.41l0,1.27c0,.22-.48.4-1.06.4l-24.34,0c-.67,0-1.2-.21-1.19-.47l0-1.2C270.11,236.55,270.59,236.37,271.17,236.37Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M271.82,230.14l24.23,0c.65,0,1.17.2,1.16.46l0,1.16c0,.25-.55.46-1.2.46l-24.23,0c-.65,0-1.17-.21-1.17-.46l0-1.17C270.63,230.34,271.17,230.14,271.82,230.14Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="16.21"
            y1="10.02"
            x2="42.57"
            y2="3.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="16.29"
            y1="11.87"
            x2="42.64"
            y2="5.63"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="15.91"
            y1="16.32"
            x2="42.1"
            y2="10.03"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="15.99"
            y1="18.06"
            x2="42.07"
            y2="11.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="16.25"
            y1="22.48"
            x2="41.89"
            y2="16.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="16.16"
            y1="24.34"
            x2="41.94"
            y2="18.11"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="15.57"
            y1="28.75"
            x2="42.09"
            y2="22.56"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="15.65"
            y1="30.59"
            x2="41.88"
            y2="24.38"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="15.76"
            y1="34.97"
            x2="41.48"
            y2="28.74"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <line
            x1="15.77"
            y1="36.82"
            x2="41.34"
            y2="30.64"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M297.41,232.47"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
          <path
            d="M270.19,274.44l24.15,0c2.58,0,4.63.81,4.6,1.8l-.14,4.43c0,1-2.15,1.8-4.72,1.8l-24.16,0c-2.57,0-4.63-.81-4.59-1.81l.14-4.43C265.5,275.24,267.61,274.43,270.19,274.44Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.6"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_G"
          v-if="selectedTooth.periapical.periapical1"
          d="M284.7,244.63c.42,0,.85-.4,5.13-5.61,1.13-1.38,2.84-2.68,3.58-4.12a8.07,8.07,0,0,1,2.95-2.8,3.52,3.52,0,0,1,1.92-.6,3,3,0,0,1,1.54.42,1.24,1.24,0,0,1,.38,1.79c-.52,1.21-.37,2.47-.64,3.7a23.82,23.82,0,0,0-.26,4.35c0,2,.11,2,0,3.29-.08,1.13-.21,1.59,0,1.61.49.05,2.26-2.18,3.33-4.48.68-1.44.3-1.23,1.41-5.85.48-2,.74-2.77.26-4a4.19,4.19,0,0,0-3.33-3.1c-2.6-.55-6,.46-7.69,1.19-2.23,1-2,1.69-4.48,4.6-2.63,3.08-3.67,3.19-4.48,5C283.34,242.24,283.77,244.56,284.7,244.63Z"
          transform="translate(-254.22 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.6"
        />
        <g id="CHID_DENT_Occlusal_Veneer_G">
          <path
            id="CHID_DENT_Occlusal_Veneer_G_2"
            v-if="selectedTooth.crown.occlusalVeneer"
            d="M271.13,303.52l-10.21-.45a5.55,5.55,0,0,1-2.39-.74,1.79,1.79,0,0,1-1-1.37l-.32-2.86c0-.72,1-1.3,2.27-1.3h11.61c1.25,0,2.27.58,2.27,1.3v4.12C273.4,302.94,272.38,303.52,271.13,303.52Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_G_1"
            v-if="selectedTooth.crown.occlusalVeneer"
            d="M293.06,303.13h4.81a14.44,14.44,0,0,0,2.95-.69,7.33,7.33,0,0,0,2.22-1.18l.84-2.16c.71-.63.55-1.37-.36-1.83a6,6,0,0,0-2.42-.47h-8c-1.89,0-3.42.71-3.42,1.59v3.15C289.64,302.42,291.17,303.13,293.06,303.13Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_G_2"
            v-if="selectedTooth.crown.onlay"
            d="M271.13,303.52l-10.21-.45a5.55,5.55,0,0,1-2.39-.74,1.79,1.79,0,0,1-1-1.37l-.32-2.86c0-.72,1-1.3,2.27-1.3h11.61c1.25,0,2.27.58,2.27,1.3v4.12C273.4,302.94,272.38,303.52,271.13,303.52Z"
            transform="translate(-254.22 -226.47)"
            fill="#FFC0CB"
            stroke="#FFC0CB"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_G_1"
            v-if="selectedTooth.crown.onlay"
            d="M293.06,303.13h4.81a14.44,14.44,0,0,0,2.95-.69,7.33,7.33,0,0,0,2.22-1.18l.84-2.16c.71-.63.55-1.37-.36-1.83a6,6,0,0,0-2.42-.47h-8c-1.89,0-3.42.71-3.42,1.59v3.15C289.64,302.42,291.17,303.13,293.06,303.13Z"
            transform="translate(-254.22 -226.47)"
            fill="#FFC0CB"
            stroke="#FFC0CB"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
          
        </g>
        <g id="CHID_DENT_Endo_Crown_G">
          <path
            id="CHID_DENT_Endo_Crown_G_2"
            v-if="selectedTooth.endo_crown.crown2"
            d="M271.17,303.39l-10.2-.46a5.39,5.39,0,0,1-2.4-.73,1.81,1.81,0,0,1-1-1.38l-.32-2.85c0-.72,1-1.3,2.27-1.3h11.61c1.25,0,2.27.58,2.27,1.3v4.12C273.44,302.81,272.42,303.39,271.17,303.39Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
          <path
            id="CHID_DENT_Endo_Crown_G_1"
            v-if="selectedTooth.endo_crown.crown1"
            d="M293.1,303h4.81a14.51,14.51,0,0,0,3-.69,7.47,7.47,0,0,0,2.21-1.18l.85-2.16c.71-.64.55-1.37-.37-1.84a6.07,6.07,0,0,0-2.42-.46h-8c-1.88,0-3.41.71-3.41,1.59v3.14C289.69,302.28,291.22,303,293.1,303Z"
            transform="translate(-254.22 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.8"
          />
        </g>
      </g>
    </svg>
      <span class="text-center my-3">G</span>
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